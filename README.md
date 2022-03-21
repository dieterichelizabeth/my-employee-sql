# my-employee-sql

My Employee SQL is a command line application which allows the user to update a database of employees - built with MySQL, inquirer, and javaScript. Following the User Story -

```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

The project accepts user input to update a database with employee information. Once started, the user is able to view information such as deparments, roles, employees, employees by manager, and employees by department.
In addition, the user is able to add or delete- departments, roles, and employees (as well as update employee roles and managers). Update: Users are able to view the total budget for each department (combined salaries of all employees in that department).

For this project, the seeds mock a flower shop. However, the database schema and queries can be used for any type of business.

[Click to view the Demo Video](https://drive.google.com/file/d/1Pjj1g-7rd-aFZJs74tHenJw5iOjHELoc/view)

## Usage/Example

The video above shows how to use the application. Follow the installation instructions below to test!

## Installation

This project requires node.js. and [MySQL](https://dev.mysql.com/doc/). In the terminal-

Check that node and mySQL are installed:

```bash
node -v
mysql --version
```

Clone the repo

```bash
git clone https://github.com/dieterichelizabeth/my-employee-sql.git
```

Install npm packages

```bash
npm i
```

Create an .env file to hold mySQL login credentials:

```bash
DB_US='<insert username here>'
DB_PW='<insert password here>'
```

Run the db folder in the mySQL shell:

```bash
source db/db.sql;
source db/schema.sql;
source db/seeds.sql;
```

Invoke the application by running-

```bash
npm start
```

## Documentation

- [MySQL ORDER BY Documentation](https://www.mysqltutorial.org/mysql-order-by/)
- [MySQL JOIN Documentation](https://www.w3schools.com/mysql/mysql_join.asp)
- [MySQL UPDATE Documentation](https://www.w3schools.com/mysql/mysql_update.asp)
- [MySQL CONCAT Documentation](https://www.w3schools.com/sql/func_mysql_concat.asp)
- [MySQL WHERE Documentation](https://www.mysqltutorial.org/mysql-where/)
- [MySQL DELETE Documentation](https://www.mysqltutorial.org/mysql-delete-statement.aspx)
- [Node.js queries Documentation](https://www.w3schools.com/nodejs/nodejs_mysql_select.asp)
- [.split() Documentation](https://www.w3schools.com/jsref/jsref_split.asp)

- [MySQL SUM Documentation](https://www.mysqltutorial.org/mysql-sum/)
