const inquirer = require('inquirer');
const { getAllRoles, getAllDepartments } = require('./db/db_access');
require('console.table');
const db = require('./db/db_access');

const init = () => {
    console.log(`
    ========= Employee Tracker Main Menu =========
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
                case 'Add Department':
                    addDepartments();
                    break;
            }

        })
};

//returning the table
const allEmployees = () => {
    db.getAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log(`\n`);
            console.table(employees)
        })
    //runs start function again 
    init();
};

//requires prompts
const addEmployees = () => {
    db.getAllRoles().then(([rows]) => {
        let roles = rows
        const roleChoices = roles.map(({id, title}) => {
        });
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's first name",
            name: 'first_name',
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'last_name',
        },
        {
            type: 'list',
            message: "What is the employee's role?",
            choices: roleChoices,
            name: 'role_id'
        },
        {
            type: 'list',
            message: "Who is the employee's manager?",
            choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown'],
            name: 'manager_id'
        },
    ])
        .then(res => {
            let emp = res;
            db.addEmployee(emp)

                .then(() => init())
            console.log('Added employee to the company database');
        })
    });
};

//requires prompts
const employeeRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "Which employee's role do you want to update?",
            name: 'updateName',
        },
        {
            type: 'list',
            message: "Which role do you want to assign to the selected employee?",
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service'],
            name: 'updateRole'
        },
    ])
        .then
    console.log("Updated employee's role in company database");
    //runs start function again 
    init();
};

//returning the table
const viewAll = () => {
    // Query database
    db.getAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log(`\n`);
            console.table(roles)
            //runs start function again 
            init();
        })
};

//requires prompts
const addRole = () => {
    db.getAllDepartments().then(([rows]) => {
        let departments = rows
        const deptChoices = departments.map(({ id, name }) => {
            return { name, value: id }
        });
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of the role?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is the salary of the role?',
                name: 'salary',
            },
            {
                type: 'list',
                message: 'Which department does the role belong to?',
                choices: deptChoices,
                name: 'department_id'
            },
        ])
            .then(res => {
                let role = res;
                db.addEmpRole(role)

                    .then(() => init())
                console.log('Added role to the company database');
            })
    })
};

//returning the table
const allDepartments = () => {
    db.getAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log(`\n`);
            console.table(departments)
        });

    //runs start function again 
    init();
};

//prompts
const addDepartments = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'name',
        },
    ])
        .then(res => {
            let dept = res;
            db.addDepartment(dept)

                .then(() => init())
            console.log('Added department to company database');
        })
};

//begins prompts when app starts
init();