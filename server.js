const inquirer = require("inquirer");
// const { exit } = require("process"); -- ?

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
        goodbye();
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
  inquirer
    .prompt({
      type: "input",
      name: "departmentInput",
      message: "Please enter the new department name.",
      validate: (departmentInput) => {
        if (!departmentInput) {
          console.log("Ack! Please enter the department name-");
          return false;
        } else {
          return true;
        }
      },
    })
    .then((answer) => {
      newDept = answer.departmentInput;
      console.log(answer); // returns: { departmentInput: 'Customer Service' }
      console.log(newDept); // returns: Customer Service

      // return to navigation menu
      nav();
    });
}

// Add a role to the database
function addRole() {
  // variable for available departments
  availableDepartments = ["Sales", "Marketing", "Delivery", "Floral"];

  inquirer
    .prompt([
      {
        type: "input",
        name: "titleInput",
        message: "Please enter the new role name.",
        validate: (titleInput) => {
          if (!titleInput) {
            console.log("Ack! Please enter the role name-");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "salaryInput",
        message:
          "Please enter a salary for the new role using the format: XXXXX.XX",
        validate: (salaryInput) => {
          if (!salaryInput) {
            console.log("Ack! Please enter a salary for the new role-");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "list",
        name: "departmentInput",
        message: "Please choose which department this role belongs to.",
        choices: availableDepartments,
      },
    ])
    .then((answers) => {
      let roleInput = [];
      roleInput.push(answers.titleInput);
      roleInput.push(answers.salaryInput);
      roleInput.push(answers.departmentInput);

      console.log(answers); // returns: { titleInput: 'Cashier', salaryInput: '10000.00', departmentInput: 'Customer Service' }
      console.log(roleInput); // returns: [ 'Cashier', '10000.00', 'Customer Service' ]

      // return to navigation menu
      nav();
    });
}

// Add an employee to the database
function addEmployee() {
  // variable for role choice
  availableRoles = [
    "Salesman",
    "Lead Social Media Coordinator",
    "Head Florist",
    "Delivery Driver",
  ];

  // variable for manager choice IMPORTANT- NULL WILL NEED TO BE ADDED
  availableManagers = [
    "Heather Gardenia",
    "Sammy Sunflower",
    "Chris Cornflower",
    "null",
  ];

  inquirer
    .prompt([
      {
        type: "input",
        name: "firstNameInput",
        message: "Please enter the employee's first name.",
        validate: (firstNameInput) => {
          if (!firstNameInput) {
            console.log("Ack! Please enter the employee's first name-");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "lastNameInput",
        message: "Please enter the employee's last name.",
        validate: (lastNameInput) => {
          if (!lastNameInput) {
            console.log("Ack! Please enter the employee's last name-");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "list",
        name: "roleInput",
        message: "Please choose a role for this employee.",
        choices: availableRoles,
      },
      {
        type: "list",
        name: "managerInput",
        message: "Please choose the employee's manager.",
        choices: availableManagers,
      },
    ])
    .then((answers) => {
      let employeeInput = [];
      employeeInput.push(answers.firstNameInput);
      employeeInput.push(answers.lastNameInput);
      employeeInput.push(answers.roleInput);
      employeeInput.push(answers.managerInput);

      console.log(answers); // returns: { firstNameInput: 'Valarie', lastNameInput: 'Violet', roleInput: 'Head Florist', managerInput: 'Heather Gardenia' }
      console.log(employeeInput); // returns: [ 'Valarie', 'Violet', 'Head Florist', 'Heather Gardenia' ]

      // return to navigation menu
      nav();
    });
}

// Update an employee's role in the database
function updateEmployeeRole() {
  console.log("Update Employee's role:");
  // variable for employee choice
  availableEmployees = [
    "Heather Gardenia",
    "Sammy Sunflower",
    "Chris Cornflower",
  ];

  // variable for role choice
  availableRoles = [
    "Salesman",
    "Lead Social Media Coordinator",
    "Head Florist",
    "Delivery Driver",
  ];

  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeChoice",
        message: "Which employee would you like to update?",
        choices: availableEmployees,
      },
      {
        type: "list",
        name: "roleChoice",
        message: "Please select their new role",
        choices: availableRoles,
      },
    ])
    .then((answers) => {
      let updateRoleChoice = [];
      updateRoleChoice.push(answers.employeeChoice);
      updateRoleChoice.push(answers.roleChoice);
      console.log(answers); // returns: { employeeChoice: 'Heather Gardenia', roleChoice: 'Delivery Driver' }
      console.log(updateRoleChoice); // returns: [ 'Heather Gardenia', 'Delivery Driver' ]

      // return to navigation menu
      nav();
    });
}

// Update an employee's manager in the database
function updateEmployeeManager() {
  console.log("Update Employee's manager");
  // variable for employee choice
  availableEmployees = [
    "Heather Gardenia",
    "Sammy Sunflower",
    "Chris Cornflower",
  ];

  // variable for Manager choice
  availableManagers = [
    "Heather Gardenia",
    "Sammy Sunflower",
    "Chris Cornflower",
  ];

  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeChoice",
        message: "Which employee would you like to update?",
        choices: availableEmployees,
      },
      {
        type: "list",
        name: "managerChoice",
        message: "Please select their new manager",
        choices: availableManagers,
      },
    ])
    .then((answers) => {
      let updateManagerChoice = [];
      updateManagerChoice.push(answers.employeeChoice);
      updateManagerChoice.push(answers.managerChoice);
      console.log(answers); // returns: { employeeChoice: 'Heather Gardenia', managerChoice: 'Sammy Sunflower' }
      console.log(updateManagerChoice); // returns: [ 'Heather Gardenia', 'Sammy Sunflower' ]

      // return to navigation menu
      nav();
    });
}

// Delete a department from the database
function deleteDepartment() {
  // variable for available departments
  availableDepartments = ["Sales", "Marketing", "Delivery", "Floral"];

  inquirer
    .prompt({
      type: "list",
      name: "departmentChoice",
      message: "Please choose a department to delete.",
      choices: availableDepartments,
    })
    .then((answer) => {
      removeDept = answer.departmentChoice;
      console.log(answer); // returns: { departmentChoice: 'Sales' }
      console.log(removeDept); // returns: Sales

      // return to navigation menu
      nav();
    });
}

// Delete a role from the database
function deleteRole() {
  // variable for role choice
  availableRoles = [
    "Salesman",
    "Lead Social Media Coordinator",
    "Head Florist",
    "Delivery Driver",
  ];

  inquirer
    .prompt({
      type: "list",
      name: "roleChoice",
      message: "Please choose a role to delete.",
      choices: availableRoles,
    })
    .then((answer) => {
      removeRole = answer.roleChoice;
      console.log(answer); // returns: { roleChoice: 'Salesman' }
      console.log(removeRole); // returns: Salesman

      // return to navigation menu
      nav();
    });
}

// Delete an employee from the database
function deleteEmployee() {
  // variable for employee choice
  availableEmployees = [
    "Heather Gardenia",
    "Sammy Sunflower",
    "Chris Cornflower",
  ];

  inquirer
    .prompt({
      type: "list",
      name: "employeeChoice",
      message: "Please choose an employee to delete.",
      choices: availableEmployees,
    })
    .then((answer) => {
      removeEmployee = answer.employeeChoice;
      console.log(answer); // returns: { employeeChoice: 'Heather Gardenia' }
      console.log(removeEmployee); // returns: Heather Gardenia

      // return to navigation menu
      nav();
    });
}

// Exit the application
// Ascii art from: https://www.asciiart.eu/plants/cactus
function goodbye() {
  console.log(`
    *-.
    |  |
,.  |  |
| |_|  | ,.     Thank you for using
'---.  |_| |      My Employee SQL
    |  .--'
    |  |
    |  | 
`);
}

welcome();
