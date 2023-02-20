const inquirer = require('inquirer')

const questions = () => {
    console.log(`
    =========Employee Tracker=========
    `);
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
            name: 'start'
        },
    ])
        .then((answer) => {
            switch (answer.start) {
                case 'View All Employees':
                    allEmployees();
                    break;
                case 'Add Employees':
                    addEmployees();
                    break;
                case 'Update Employee Role':
                    employeeRole();
                    break;
                case 'View All Roles':
                    viewAll();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'View All Departments':
                    allDepartments();
                    break;
            }

        })
};

//returning the table
const allEmployees = () => {
    // employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    const sql = `SELECT id, first_name, last_name, role, department, salary, manager_name`;
    //runs start function again 
questions();
};

//requires prompts
const addEmployees = () => {
    inquirer.prompt ([
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'firstName', 
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'lastName', 
        },
        {
            type: 'list',
            message: "What is the employee's role?",
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead','Lawyer', 'Customer Service'],
            name: 'role'
        },
        {
            type: 'list',
            message: "Who is the employee's manager?",
            choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown'],
            name: 'manager'
        },
    ])
    .then
console.log('Added `{$firstName}` `{$lastName}` to the database');
    //runs start function again 
    questions();
};

//requires prompts
const employeeRole = () => {
    inquirer.prompt ([
        {
            type: 'input',
            message: "Which employee's role do you want to update?",
            name: 'updateName', 
        },
    {
        type: 'list',
        message: "Which role do you want to assign to the selected employee?",
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead','Lawyer', 'Customer Service'],
        name: 'updateRole'
    },
    ])
    .then
    console.log("Updated employee's role");
        //runs start function again 
questions();
};

//returning the table
const viewAll = () => {
    // Query database
db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
            //runs start function again 
questions();
})};

//requires prompts
const addRole = () => {
    inquirer.prompt ([
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'name', 
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'salary', 
    },
    {
        type: 'list',
        message: 'Which department does the role belong to?',
        choices: ['Engineering', 'Finance', 'Legal', 'Sales', 'Service'],
        name: 'department'
    },
])
.then
console.log('Added Customer Service to the database');
    //runs start function again 
    questions();
};

//returning the table
const allDepartments = () => {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
})
    //runs start function again 
    questions();
    };

//begins prompts when app starts
questions();