USE employees_db;

INSERT INTO departments (name) VALUES
('Sales'),
('Engineering'),
('IT'),
('Human Resources');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Byron", "Doe", 1, null),
    ("Josh", "Chan", 2, 1),
    ("Kenneth", "Rodriguez", 3, null),
    ("Chris", "Tupik", 4, 3),
    ("Kunal", "Singh", 5, null),
    ("Zach", "Brown", 6, 5),
    ("Tom", "Lourd", 7, null),
    ("Jenny", "Allen", 8, 7);

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Accountant", 125000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4),
    ("HR Lead", 100000, 4);
