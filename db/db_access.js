const db = require ('./connection');

class db_access {
    constructor (db){
        this.db = db;
    }

    getAllDepartments() {
        return this.db.promise().query(
            'SELECT department.id, department.name FROM department;'
        )
    }

    getAllRoles() {
        return this.db.promise().query(
            'SELECT role.title, department.id, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;' 
        )
    }

    getAllEmployees() {
        return this.db.promise().query(
            'SELECT employee.first_name, employee.last_name, employee.role_id, employee.manager_id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id' 
        )
    }

    addDepartment(dept){
        return this.db.promise().query(
            'INSERT INTO department SET ? ', dept
        );
    }

    addEmployee(emp){
        return this.db.promise().query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', '${role_id}, '${manager_id}')`, emp
        );
    }

    addEmpRole(role){
        return this.db.promise().query(
            `INSERT INTO role (title, department_id, salary) VALUES ('${role.title}','${role.department_id}','${role.salary}')`, role
        );
    }

    addManager(mgr){
        return this.db.promise().query(
            `INSERT INTO employee (manager_id) VALUES ('${manager_id}')`, mgr
        );
    }
}

module.exports = new db_access(db);