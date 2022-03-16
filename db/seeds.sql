INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Marketing"),
       ("Floral"),
       ("Delivery");

-- SELECT * FROM department;

INSERT INTO roles (title, salary, department_id)
VALUES ("Lead Social Media Coordinator", 20000.75, 1),
       ("Social Media Marketing Intern", 12800.00, 2),
       ("Salesman", 15975.00, 1),
       ("Bouquet Arranger", 12450.00, 3),
       ("Floral Designer", 13780.00, 3),
       ("Head Florist", 22000.00, 3),
       ("Delivery Driver", 14000.00, 4);

-- SELECT * FROM roles;
-- See the department by searching for "role" --
-- SELECT roles.id, roles.title, roles.salary, department.department_name
    -- FROM roles
    -- INNER JOIN department ON roles.department_id = department.id;

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Sammy", "Sunflower", 16),
       ("Tammy", "Tulip", 15),
       ("Ivy", "Jones", 18),
       ("Chris", "Cornflower", 21),
       ("Ally", "Anemone", 19),
       ("Brick", "Begonia", 17),
       ("Heather", "Gardenia", 20);

UPDATE employee
SET manager_id = 9
WHERE employee.id = 8;

UPDATE employee
SET manager_id = 14
WHERE employee.id = 10;

UPDATE employee
SET manager_id = 14
WHERE employee.id = 12;

-- SELECT * FROM employee
-- See the employee table with required values: currently gets 54 (4 X 14)
-- SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.department_name, roles.salary, concat(manager.last_name, ", ", manager.first_name) AS manager_full_name
-- FROM employee
--     LEFT JOIN roles 
--         ON employee.role_id = roles.id
--     LEFT JOIN department 
--         ON roles.department_id = department.id
--     LEFT JOIN employee AS manager ON manager.id = employee.manager_id;