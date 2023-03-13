
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
    .prompt(questionsArray)
    .then((data) => {
console.log(data.name);

// ## Credits
// If you have questions or want more info Please feel free to email me!
// Email: [${data.email}](mailto:${data.email}) \n
// GitHub Username: [${data.gitHubUser}](https://github.com/${data.gitHubUser})

// ${data.contributions}

    })
    