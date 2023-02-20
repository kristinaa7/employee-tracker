SELECT * 
FROM role
JOIN department ON role.department = department_id;

SELECT *
FROM employee
JOIN role ON employee.role = role_id;

