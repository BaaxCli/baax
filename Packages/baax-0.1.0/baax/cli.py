import click
from baax.scaffolder.flask_scaffold import scaffold_flask
from baax.scaffolder.fastapi_scaffold import scaffold_fastapi
from baax.scaffolder.django_scaffold import scaffold_django

@click.group()
def main():
    """Baax CLI – Backend Accelerator for Flask, FastAPI, and Django"""
    pass

@main.command()
def create():
    """Create a new backend project"""
    click.echo("\n🚀 Welcome to Baax – Backend Accelerator CLI\n")

    framework = click.prompt(
        "Select a framework",
        type=click.Choice(['flask', 'fastapi', 'django'], case_sensitive=False)
    )

    project_name = click.prompt("Enter your project name")

    if framework.lower() == 'flask':
        scaffold_flask(project_name)
    elif framework.lower() == 'fastapi':
        scaffold_fastapi(project_name)
    elif framework.lower() == 'django':
        scaffold_django(project_name)

    click.echo(f"\n {framework.title()} project '{project_name}' created successfully!")

if __name__ == '__main__':
    main()
