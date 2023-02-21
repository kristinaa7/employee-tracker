const inquirer = require('inquirer')

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
                    case 'Add':
                        addDepartments();
                        break;
            }

        })
};

//returning the table
const allEmployees = () => {
    // employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS 'department', role.salary FROM employee, role, department WHERE department.id = role.department_id AND role.id = employee.role_id ORDER BY employee.id ASC, employee.manager_id FROM employee, role, department`;
    //runs start function again 
    init();
};

//requires prompts
const addEmployees = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's first name",
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
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service'],
            name: 'role'
        },
        {
            type: 'list',
            message: "Who is the employee's manager?",
            choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown'],
            name: 'manager'
        },
    ])
        .then(answer => {

        })
    console.log('Added `{$firstName}` `{$lastName}` to the database');
    //runs start function again 
    init();
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
    console.log("Updated employee's role");
    //runs start function again 
    init();
};

//returning the table
const viewAll = () => {
    // Query database
const sql = `SELECT role.id, role.title, department.name AS department FROM role JOIN department ON role.department_id = department.id`
db.query('select * from employee', (err, data) => {
    console.table(data)
        //runs start function again 
        init();
    })
};

//requires prompts
const addRole = () => {
    inquirer.prompt([
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
    init();
};

//returning the table
const allDepartments = () => {
const sql = `SELECT department.id as id, department.name AS department FROM department`;
    //runs start function again 
    init();
};

//prompts
const addDepartments = () => {
    init();
}

//begins prompts when app starts
init();