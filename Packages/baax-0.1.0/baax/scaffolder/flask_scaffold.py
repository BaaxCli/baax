import os

def scaffold_flask(project_name):
    base_path = os.path.abspath(project_name)
    os.makedirs(base_path, exist_ok=True)

    folders = ['app', 'app/templates', 'app/static']
    for folder in folders:
        os.makedirs(os.path.join(base_path, folder), exist_ok=True)

    with open(os.path.join(base_path, 'app', '__init__.py'), 'w') as f:
        f.write("""from flask import Flask

def create_app():
    app = Flask(__name__)
    from . import routes
    app.register_blueprint(routes.main)
    return app
""")

    with open(os.path.join(base_path, 'app', 'routes.py'), 'w') as f:
        f.write("""from flask import Blueprint

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return "Hello from Flask via Baax!"
""")

    with open(os.path.join(base_path, 'run.py'), 'w') as f:
        f.write("""from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
""")

    with open(os.path.join(base_path, 'requirements.txt'), 'w') as f:
        f.write("flask\n")

    with open(os.path.join(base_path, 'README.md'), 'w') as f:
        f.write(f"# {project_name}\n\nGenerated using Baax 🚀\n")

    print(f"📦 Flask project '{project_name}' created successfully at {base_path}")
