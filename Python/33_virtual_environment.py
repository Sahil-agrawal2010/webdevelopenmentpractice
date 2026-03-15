# Virtual environment is a python environment where libraries,scripts are issolated from the rest of the environment or default.
# Virtual environment is very important/useful while managing different packages.
# Virtual environment allows us to avoid installing python packages globally which could break stystem tools or other projects.
# Virtal environment is a tool that is used to issolated specific python environment on the single machine , allowing us to work on multiple projects with different dependencies and packages without confilict.


# How to install virtual environment :- 
# Command - python- m venv virtual_environment_name

# How to activate virtaul environment (in windows) :- 
# Command virtual_environment_name\scripts\bin\activate

# How to deactivate virtual envirnoment :- 
# deactivate

# Some important command :- 
# 1) pip freeze :- This command shorws all the libraries , packages , modules that we have installed in out virtual environment along with their versions.
# 2) pip freeze > file_name.txt :- This allows us to create a new txt/text file that will store all "pip freeze" information.
# 3) pip install -r file_name.txt :- This command will install all the packages mentioned/specified in the txt/text file.
# 4) pip install package_name== version_number :- This allows us to install the specific version of that module.