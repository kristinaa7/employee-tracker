const db = require ('./connection');

class db_access {
    constructor (db){
        this.db = db;
    }

    getAllDepartments() {
        return this.db.promise().query(
            'select department.id, department.name FROM department;'
        )
    }

    getAllRoles() {
        return this.db.promise().query(
            'select role.title, department.id, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;' 
        )
    }

    getAllEmployees() {
        return this.db.promise().query(
            'select employee.first_name, employee.last_name, employee.role_id, employee.manager_id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id' 
        )
    }

    addDepartment(dept){
        return this.db.promise().query(
            'insert into department set ? ', dept
        );
    }
}

module.exports = new db_access(db);