INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Marketing"),
       ("Floral"),
       ("Delivery");

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesman", 15975.00, 1),
       ("Lead Social Media Coordinator", 20000.75, 2),
       ("Head Florist", 22000.00, 3),
       ("Delivery Driver", 14000.00, 4),
       ("Bouquet Arranger", 12450.00, 3),
       ("Floral Designer", 13780.00, 3),
       ("Social Media Marketing Intern", 12800.00, 2);
      

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Cornflower", 1, NULL),
       ("Sammy", "Sunflower", 2, NULL),
       ("Heather", "Gardenia", 3, NULL),
       ("Tammy", "Tulip", 4, NULL),
       ("Ivy", "Jones", 5, 3),
       ("Ally", "Anemone", 6, 3),
       ("Brick", "Begonia", 7, 2);



        -- DISPLAY DEPARTMENTS --
-- SELECT * FROM department;


        -- DISPLAY ROLES --
-- SELECT roles.id, roles.title, roles.salary, department.department_name
--     FROM roles
--     INNER JOIN department ON roles.department_id = department.id;


--         -- DISPLAY EMPLOYEES --
-- SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.department_name, roles.salary, CONCAT(manager.last_name, ", ", manager.first_name) AS manager_full_name
-- FROM employee
--     LEFT JOIN roles 
--         ON employee.role_id = roles.id
--     LEFT JOIN department 
--         ON roles.department_id = department.id
--     LEFT JOIN employee AS manager ON manager.id = employee.manager_id;

        -- ADD A DEPARTMENT --
-- INSERT INTO department (department_name)
-- VALUES ("Customer Service");


        -- ADD A ROLE --
-- INSERT INTO roles (title, salary, department_id)
-- VALUES ("Cashier", 13450.50, 5);


        -- ADD AN EMPLOYEE --
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Valerie", "Violet", 8, 2);


        -- UPDATE AN EMPLOYEE --
-- UPDATE employee SET role_id = 7 WHERE employee.id = 8;


        -- UPDATE AN EMPLOYEE'S MANAGER --
-- UPDATE employee SET manager_id = 1 WHERE employee.id = 8;


        -- VIEW EMPLOYEES BY MANAGER --
-- SELECT employee.id, employee.first_name, employee.last_name, CONCAT(manager.last_name, ", ", manager.first_name) AS manager_full_name
-- FROM employee
-- LEFT JOIN employee AS manager ON manager.id = employee.manager_id
-- ORDER BY manager_full_name DESC;


        -- VIEW EMPLOYEES BY DEPARTMENT --
-- SELECT employee.id, employee.first_name, employee.last_name, department.department_name
-- FROM employee
-- LEFT JOIN roles 
--         ON employee.role_id = roles.id
-- LEFT JOIN department 
--         ON roles.department_id = department.id
-- ORDER BY department_name DESC;

        -- DELETE A DEPARTMENT --
-- DELETE FROM department
-- WHERE department.id = 5;


        -- DELETE A ROLE --
-- DELETE FROM roles
-- WHERE roles.id = 8;

        -- DELETE AN EMPLOYEE --
-- DELETE FROM employee 
-- WHERE employee.id = 8;
