# Employee Tracker

## Description
The Employee Tracker is a command-line application that manages a company's employee database. 

## Usage
Begin by installing all the packages, please use ```npm i```.

To excute MYSQL Shell in the terminal complete the following steps:

```mysql -u root -p``` 

then source the schema file: 
```SOURCE db/schema.sql;```

then source the schema file: 
```SOURCE db/seeds.sql;```

To run the application, please run ```node index.js```.

The user is then prompted with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

Use your arrow keys to navigate through the questions. For specific functions, like add a department, add a role, add an employee, and update employee role, you will be prompted to use answer the prompts using your keyboard. From there, the user's answers should be stored if the view tables functions were rerun.

## Technology Used 
* MySQL2 
* Inquirer
* Node.js


## License 
N/A

## Video Walkthrough 
https://drive.google.com/file/d/1aoZHRXaH6S6X8fbKqizhSejnMFpppRh-/view 