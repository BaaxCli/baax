import os
import subprocess

def scaffold_django(project_name):
    base_path = os.path.abspath(project_name)
    os.makedirs(base_path, exist_ok=True)
    os.chdir(base_path)

    try:
        subprocess.run(['django-admin', 'startproject', project_name, '.'], check=True)
    except Exception as e:
        print("❌ Error: Make sure Django is installed (`pip install django`).")
        return

    with open(os.path.join(base_path, 'requirements.txt'), 'w') as f:
        f.write("django\n")

    with open(os.path.join(base_path, 'README.md'), 'w') as f:
        f.write(f"# {project_name}\n\nGenerated using Baax 🚀\n")

    print(f"📦 Django project '{project_name}' created successfully at {base_path}")
