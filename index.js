
const inquirer = require('inquirer');

const questionsArray = [
    {
        type: 'input',
        message: 'Name of team member?',
        name: 'name', 
    },
    {
        type: 'input',
        message: 'What is your Employee ID?',
        name: 'employeeId',
    },
    {
        type: 'input',
        message: 'Provide your preffered Email for contact',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Provide your office number',
        name: 'officeNum',
    }
];

//Inquirer install
inquirer
    .prompt([
        {
            type: 'list',
            message: 'Would you like to add another team member?',
            name: 'addMember',
            choices: [
                'Engineer',
                'Intern',
                'finn' ]
        }
    ])
    .then((data) => {
console.log(data.name);

    })
    