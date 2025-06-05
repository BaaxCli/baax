from setuptools import setup, find_packages

setup(
    name='baax',
    version='0.1.0',
    packages=find_packages(),
    install_requires=['click'],  # or any other deps
    entry_points={
        'console_scripts': [
            'baax=baax.cli:main',
        ],
    },
    author='Nagaraj Neelam',
    description='A backend accelerator CLI tool for Python frameworks like Flask, Django, FastAPI.',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='https://github.com/BaaxCli/baax',
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
    ],
    python_requires='>=3.7',
)
