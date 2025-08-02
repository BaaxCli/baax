import fs from 'fs';
import chalk from 'chalk';

export function createModuleFiles(modules) {
    modules.forEach((module) => {
        const moduleFiles = [
            {
                path: `src/controllers/${module}.controller.js`,
                content: `const ${module}Service = require('../services/${module}.service');

const get${module} = async (req, res, next) => {
    try {
        const data = await ${module}Service.getAll();
        res.json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const get${module}ById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await ${module}Service.getById(id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: '${module} not found'
            });
        }
        res.json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const create${module} = async (req, res, next) => {
    try {
        const data = await ${module}Service.create(req.body);
        res.status(201).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const update${module} = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await ${module}Service.update(id, req.body);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: '${module} not found'
            });
        }
        res.json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const delete${module} = async (req, res, next) => {
    try {
        const { id } = req.params;
        await ${module}Service.delete(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    get${module},
    get${module}ById,
    create${module},
    update${module},
    delete${module}
};`
            },
            {
                path: `src/models/${module}.model.js`,
                content: `const mongoose = require('mongoose');

const ${module}Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('${module}', ${module}Schema);`
            },
            {
                path: `src/services/${module}.service.js`,
                content: `const ${module}Model = require('../models/${module}.model');

class ${module}Service {
    async getAll() {
        return await ${module}Model.find({ status: 'active' });
    }

    async getById(id) {
        return await ${module}Model.findById(id);
    }

    async create(data) {
        const item = new ${module}Model(data);
        return await item.save();
    }

    async update(id, data) {
        return await ${module}Model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await ${module}Model.findByIdAndDelete(id);
    }
}

module.exports = new ${module}Service();`
            },
            {
                path: `src/routes/${module}.routes.js`,
                content: `const express = require('express');
const router = express.Router();
const {
    get${module},
    get${module}ById,
    create${module},
    update${module},
    delete${module}
} = require('../controllers/${module}.controller');
const { authenticateToken } = require('../middleware/auth');

// Public routes
router.get('/', get${module});
router.get('/:id', get${module}ById);

// Protected routes
router.post('/', authenticateToken, create${module});
router.put('/:id', authenticateToken, update${module});
router.delete('/:id', authenticateToken, delete${module});

module.exports = router;`
            }
        ];

        moduleFiles.forEach(({ path, content }) => {
            fs.writeFileSync(path, content);
            console.log(chalk.green(`Created file: ${path}`));
        });
    });
}