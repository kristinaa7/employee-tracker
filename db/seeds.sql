INSERT INTO department (id, name)
VALUES  (2, 'Engineering'), 
        (3, 'Finance'), 
        (4, 'Legal'), 
        (1, 'Sales'),


INSERT INTO role (id, title, department_id, salary) 
VALUES  (1, 'Sales Lead', 1, 100000),
        (2,'Salesperson', 1, 80000),
        (3,'Lead Engineer', 2, 150000),
        (4,'Software Engineer', 2, 120000),
        (5, 'Account Manager', 3, 160000),
        (6,'Accountant', 3, 125000),
        (7,'Legal Team Lead', 4, 250000),
        (8,'Lawyer', 4, 190000),


INSERT INTO employee (id, first_name, last_name, role_id, department_id, salary, manager_id)
VALUES  (1, 'John', 'Doe', 1, 1, 100000, NULL),
        (2, 'Mike', 'Chan', 2, 1, 80000, 1), 
        (3, 'Ashley', 'Rodriguez', 3, 2, 150000, NULL),
        (4, 'Kevin', 'Tupik', 4, 2, 120000, 3),
        (5, 'Kunal', 'Singh', 5, 3, 160000 NULL),
        (6, 'Malia', 'Brown', 6, 3, 125000, 5),
        (7, 'Sarah', 'Lourd', 7, 4, 250000, NULL),
        (8, 'Tom', 'Allen', 8, 4, 190000, 7),
