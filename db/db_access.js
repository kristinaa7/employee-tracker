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
            'select role.title, department.id, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;' 
        )
    }
}

module.exports = new db_access(db);