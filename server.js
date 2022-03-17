const inquirer = require("inquirer");

// Ascii art from: https://www.asciiart.eu/food-and-drinks/coffee-and-tea
function welcome() {
  console.log(`
      ;)( ;
    :----:         My Employee SQL:
   C|====|    Employee Management systems
    |    |     
     ----
`);
  nav();
}

// navigation menu
function nav() {
  inquirer
    .prompt({
      type: "list",
      name: "navigation",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "View Employees by Manager",
        "View Employees by Department",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
        "Update an Employee Manager",
        "Delete Departments",
        "Delete Roles",
        "Delete Employees",
        "Exit",
      ],
    })
    .then((answer) => {
      nextPrompt = answer.navigation;
      if (nextPrompt === "View All Departments") {
        viewDepartments();
      } else if (nextPrompt === "View All Roles") {
        viewRoles();
      } else if (nextPrompt === "View All Employees") {
        viewEmployees();
      } else if (nextPrompt === "View Employees by Manager") {
        viewEmployeesByManager();
      } else if (nextPrompt === "View Employees by Department") {
        viewEmployeesByDepartment();
      } else if (nextPrompt === "Add a Department") {
        addDepartment();
      } else if (nextPrompt === "Add a Role") {
        addRole();
      } else if (nextPrompt === "Add an Employee") {
        addEmployee();
      } else if (nextPrompt === "Update an Employee Role") {
        updateEmployeeRole();
      } else if (nextPrompt === "Update an Employee Manager") {
        updateEmployeeManager();
      } else if (nextPrompt === "Delete Departments") {
        deleteDepartment();
      } else if (nextPrompt === "Delete Roles") {
        deleteRole();
      } else if (nextPrompt === "Delete Employees") {
        deleteEmployee();
      } else {
        console.log("Thank you for visiting!");
      }
    });
}

// Display departments from the database
function viewDepartments() {
  console.log("Departments table");
  nav();
}

// Display roles from the database
function viewRoles() {
  console.log("Roles table");
  nav();
}

// Display employees from the database
function viewEmployees() {
  console.log("Employees table");
  nav();
}

// Display employees by manager
function viewEmployeesByManager() {
  console.log("Employees by Manager table");
  nav();
}

// Display employees by department
function viewEmployeesByDepartment() {
  console.log("Employees by Department table");
  nav();
}

// Add a department to the database
function addDepartment() {
  console.log("Add Department here");
  nav();
}

// Add a role to the database
function addRole() {
  console.log("Add Role here");
  nav();
}

// Add an employee to the database
function addEmployee() {
  console.log("Add Employee here");
  nav();
}

// Update an employee's role in the database
function updateEmployeeRole() {
  console.log("Update Employee's role");
  nav();
}

// Update an employee's manager in the database
function updateEmployeeManager() {
  console.log("Update Employee's manager");
  nav();
}

// Delete a department from the database
function deleteDepartment() {
  console.log("Delete a department");
  nav();
}

// Delete a role from the database
function deleteRole() {
  console.log("Delete a role");
  nav();
}

// Delete an employee from the database
function deleteEmployee() {
  console.log("Delete an employee");
  nav();
}

welcome();
