import os

def scaffold_fastapi(project_name):
    base_path = os.path.abspath(project_name)
    os.makedirs(base_path, exist_ok=True)

    with open(os.path.join(base_path, 'main.py'), 'w') as f:
        f.write("""from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {"message": "Hello from FastAPI via Baax!"}
""")

    with open(os.path.join(base_path, 'requirements.txt'), 'w') as f:
        f.write("fastapi\nuvicorn\n")

    with open(os.path.join(base_path, 'README.md'), 'w') as f:
        f.write(f"# {project_name}\n\nGenerated using Baax 🚀\n")

    print(f"📦 FastAPI project '{project_name}' created successfully at {base_path}")
