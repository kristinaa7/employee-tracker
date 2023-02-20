INSERT INTO department (name)
VALUES  ( 'Sales'),
        ( 'Engineering'), 
        ( 'Finance'), 
        ( 'Legal');

-- autoincrement in schema.sql makes you not need to rewrite your Id
-- semi colons on the last value

INSERT INTO role (title, department_id, salary) 
VALUES  ('Sales Lead', 1, 100000),
        ('Salesperson', 1, 80000),
        ('Lead Engineer', 2, 150000),
        ('Software Engineer', 2, 120000),
        ( 'Account Manager', 3, 160000),
        ('Accountant', 3, 125000),
        ('Legal Team Lead', 4, 250000),
        ('Lawyer', 4, 190000);


INSERT INTO employee (first_name, last_name, role_id, department_id, salary, manager_id)
VALUES  ('John', 'Doe', 1, 1, 100000, NULL),
        ('Mike', 'Chan', 2, 1, 80000, 1), 
        ('Ashley', 'Rodriguez', 3, 2, 150000, NULL),
        ('Kevin', 'Tupik', 4, 2, 120000, 3),
        ('Kunal', 'Singh', 5, 3, 160000 NULL),
        ('Malia', 'Brown', 6, 3, 125000, 5),
        ('Sarah', 'Lourd', 7, 4, 250000, NULL),
        ('Tom', 'Allen', 8, 4, 190000, 7);
