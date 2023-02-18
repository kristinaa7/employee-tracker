const inquirer = require('inquirer')

const questions = () => {
    console.log(`Employee Tracker`);
    inquirer.prompt ([
    {
    type: 'list',
    message: 'What would you like to do?',
    choices: ['View All Employees','Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
    default: 'View All Employees',
    name: 'actionKeys'
    },
])
.then(answer => {
    console.log('Answer',answer.actionKeys);
})};