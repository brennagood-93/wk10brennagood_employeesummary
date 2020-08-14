const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



const initQ = [{
    type: "list",
    name: "roleType",
    message:
      "Please enter the type of employee you're adding (manager, engineer, intern)",
    choices: ["Manager", "Engineer", "Intern"]
  },
  
    {
      type: "input",
      name: "name",
      message: "Please enter employee's name",
    },{
      type: "input",
      name: "id",
      message: "Please enter employee ID number",
    },{
      type: "input",
      name: "email",
      message: "Please enter employee's email address",
    }
  ];
  const specQ = [{
      type: "input",
      name: "officeNumber",
      message: "Please enter manager's office number",
  },{
      type: "input",
      name: "github",
      message: "Please enter engineer's github username",
  },{
      type: "input",
      name: "school",
      message: "Please enter intern's school",
  }]
  const endQ = {
      type: "list",
      name: "more",
      message: "Would you like to add another employee? (Y/N)",
      choices: ["Y", "N"]
  }
  let employees = [];

  function prompts() {
  inquirer.prompt(initQ).then((answers) => {console.log(answers)
        if(answers.roleType == "Manager") {
            inquirer.prompt(specQ[0]).then((specialAnswer) => {
                console.log(specialAnswer)
                const newEmployee = new Manager(answers.name, answers.id, answers.email, specialAnswer.officeNumber)
                employees.push(newEmployee);
                inquirer.prompt(endQ).then((endAnswer) => {
                    if(endAnswer.more == "Y"){
                        prompts();
                    }
                    else {
                        const html = render(employees);
                        fs.writeFile(outputPath, html, function(error){
                            if(error) console.log(error);
                        })
                    }

                })
            
            
            });
        }

        if(answers.roleType == "Engineer") {
            inquirer.prompt(specQ[1]).then((specialAnswer) => {
                console.log(specialAnswer)
                const newEmployee = new Engineer(answers.name, answers.id, answers.email, specialAnswer.github)
                employees.push(newEmployee);
                inquirer.prompt(endQ).then((endAnswer) => {
                    if(endAnswer.more == "Y"){
                        prompts();
                    }
                    else {
                        const html = render(employees);
                        fs.writeFile(outputPath, html, function(error){
                            if(error) console.log(error);
                        })
                    }


                })
            });
        }
        if(answers.roleType == "Intern") {
            inquirer.prompt(specQ[2]).then((specialAnswer) => {
                console.log(specialAnswer)
                const newEmployee = new Intern(answers.name, answers.id, answers.email, specialAnswer.school)
                employees.push(newEmployee);
                inquirer.prompt(endQ).then((endAnswer) => {
                    if(endAnswer.more == "Y"){
                        prompts();
                    }
                    else {
                        const html = render(employees);
                        fs.writeFile(outputPath, html, function(error){
                            if(error) console.log(error);
                        })
                    }


                })
            });
        }

});
  }
prompts()
 
  
  
  



