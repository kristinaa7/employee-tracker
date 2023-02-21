const mysql = require ('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'company_db',
    password: 'Bootcamp2023$',
});

db.connect(function (err){
    if (err) throw err;
});

module.exports = db; 