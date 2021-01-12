const mysql = require("mysql");
const inquirer = require('inquirer');
const connection = require ("./db/connection")




async function init(){
    try{ 
        const answers = await inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do today?",
            name: "todo",
            choices: [
                "Add Departments",
                "Add Roles",
                "Add Employees", 
                "View All Departments",
                "View All Roles", 
                "View All Employees",
                "Update Employee Roles", 
                "Delete a Department",
                "Quit"
            ]
        }
    ]);

    switch(answers.todo){

// add departments 
        case "Add Departments": 

        const addDepartment =  await inquirer.prompt([
            {
                name: "type",
                type: "input",
                message: "Which Department are you adding?"
            }
        ])
            let adddepts = await connection.query("INSERT INTO department SET name = ?", [addDepartment.type])

            init();
            break;
// add roles
        case "Add Roles": 
            let depts = await connection.query("SELECT * FROM department");
            console.table(depts);
            const roleAnswers = await inquirer.prompt([
                {
                    name: "type",
                    type: "input",
                    message: "Which Role Would You like to add?",
                  },
                {
                    name: "salary",
                    type: "number",
                    message: "What is this role's Salary?",
                },  
                {
                    name: "dept",
                    type: "list",
                    message: "Which Department is this role in?",
                    choices: depts.map(dept => {
                        return {
                            name: dept.name,
                            value: dept.id
                        }
                    } )
        
                }  

              ]);

              let addRoles = await connection.query("INSERT INTO roles SET title = ?, salary = ?, department_id = ?", 
              [roleAnswers.type, roleAnswers.salary, roleAnswers.dept]);
              init();
              break;
// add employees
        case "Add Employees": 
        // find out how to query for null 
        let emps = await connection.query("SELECT * FROM employees");
        let roles = await connection.query("SELECT * FROM roles");
        
            console.table(emps);
            const empAnswers = await inquirer.prompt([
              
                {
                    name: "first_name",
                    type: "input",
                    message: "What's their First Name?",
                }, 
                {
                    name: "last_name",
                    type: "input",
                    message: "What's their Last Name?",
                  }, 
                {
                    name: "role",
                    type: "list",
                    message: "Which Role is this Employee in?",
                    choices: roles.map(role => {
                        return {
                            name: role.title,
                            value: role.id
                        }
                    } )
        
                },
                {
                    name: "manager",
                    type: "list",
                    message: "Which Manager is assigned to this role?",
                    choices: emps.map(manager => {
                        return {
                            name: manager.first_name + manager.last_name,
                            value: manager.id
                        }
                    } )
        
                }    

              ]);

              let addEmp = await connection.query("INSERT INTO employees SET first_name = ?, last_name = ?, role_id = ?, manager_id = ?", 
              [empAnswers.first_name, empAnswers.last_name, empAnswers.role, empAnswers.manager]);
              init();
              break;   
// view all roles 
        case "View All Roles": 
            const allroles = await connection.query("SELECT * FROM roles");
            console.table(allroles);
            init();
            break;
// view all employees
        case "View All Employees": 
            const allemps = await connection.query("SELECT * FROM employees");
            console.table(allemps);
            init();
            break;
            
// view all departments
        case "View All Departments": 
            const alldepts = await connection.query("SELECT * FROM department");
            console.table(alldepts);
            init();
            break;  
// delete a department 
        case "Delete a Department": 
      
         
        let showDepts = await connection.query("SELECT * FROM department");
        console.table(showDepts);
        const deptAnswers = await inquirer.prompt([
            {
                name: "dept",
                type: "list",
                message: "Which Department do you want to delete?",
                choices: showDepts.map(dept => {
                    return {
                        name: dept.name,
                        value: dept.id
                    }
                } )
    
            }  

          ]);
          const deleteDept = await connection.query("DELETE FROM department WHERE deparment_id = ?");
          init();
          break;


// Quit
        default: 
            connection.end();     
            
    }


    } catch(err){
        console.log(err);
    }
}



connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    init();
  });
  







  