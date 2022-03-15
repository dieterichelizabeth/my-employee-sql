-- INSERT INTO department (department_name)
-- VALUES ("Sales"),
--        ("Marketing"),
--        ("Floral"),
--        ("Delivery");
-- See the departments table SELECT * FROM department;

-- tells role belongs to which department
INSERT INTO roles (title, salary, department_id)
VALUES ("Lead Social Media Coordinator", 20000.75, 1),
       ("Social Media Marketing Intern", 12800.00, 2),
       ("Salesman", 15975.00, 1),
       ("Bouquet Arranger", 12450.00, 3),
       ("Floral Designer", 13780.00, 3),
       ("Head Florist", 22000.00, 3),
       ("Delivery Driver", 14000.00, 4);