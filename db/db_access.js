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
}

module.exports = new db_access(db);