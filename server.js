const inquirer = require("inquirer");

function welcome() {
  console.log(`
  <><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
              Employee Management systems
  <><><><><><><><><>~~~~~~~~~~~~~~~<><><><><><><><><>
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
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
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
      } else if (nextPrompt === "Add a Department") {
        addDepartment();
      } else if (nextPrompt === "Add a Role") {
        addRole();
      } else if (nextPrompt === "Add an Employee") {
        addEmployee();
      } else if (nextPrompt === "Update an Employee Role") {
        updateEmployee();
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

// Update an employee in the database
function updateEmployee() {
  console.log("Update Employee's role");
  nav();
}

welcome();
