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
