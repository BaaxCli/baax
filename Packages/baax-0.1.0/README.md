# Baax – Backend Accelerator CLI

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Python Version](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/)

Baax is a **Backend Accelerator CLI** that allows developers to instantly scaffold **production-ready backend projects** in **Flask, FastAPI, and Django** with a single command.

---

## 🚀 Features

- Scaffold Flask, FastAPI, or Django projects interactively
- Creates folder structure, starter files, and requirements
- Supports Docker, Git initialization, and environment setup (future updates)
- Open-source and modular design
- Perfect for beginners and fast prototyping

---

## ⚡ Installation

Install via **pip** (editable mode recommended for development):

```bash
pip install -e .
```

Or, after publishing to PyPI:


```bash
pip install baax
```
## 🛠️ Usage

Run the CLI:
```bash
baax create
```

You will be prompted to:

1.**Select a framework**: flask, fastapi, or django
2.**Enter the project name**:

Example:
```bash
🚀 Welcome to Baax – Backend Accelerator CLI

Select a framework (flask, fastapi, django): flask
Enter your project name: myapp
✅ Flask project 'myapp' created successfully!
```

## 📦 Project Structure (Example: Flask)

```bash

myapp/
├── app/
│   ├── __init__.py
│   ├── routes.py
│   ├── templates/
│   └── static/
├── run.py
├── requirements.txt
└── README.md

```
## 🧩 Planned Features

- Automatic Dockerfile creation
- JWT Auth / user model scaffolding
- Database integration (Postgres, MongoDB)
- Git repository initialization
- Scaffold API routes for FastAPI automatically
- Multi-framework support for future additions

## 📝 Contributing

Contributions are welcome! Please follow:

1. Fork the repository
2. Create a new branch (git checkout -b feature/my-feature)
3. Make your changes
4. Submit a pull request
