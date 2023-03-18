const inquirer = require('inquirer');
const htmlGen = require('./src/template');
const fileGen = require('./src/fileGen');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamPicker = [];
    const getManager = () => {
        inquirer.prompt([ 
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
]).then((response) => {
    console.log(response);
    const manager = new Manager(response.name, response.id, response.email, response.officeNum);
    teamPicker.push(manager);
    newTeamatePrompt();
})
}

const getEngineer = () => {
inquirer.prompt([
    {
        type: 'input',
        message: "Name of Engineer?",
        name: 'name'
    },
    {
        type: 'input',
        message: "Current Engineer's ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "Current Engineer's email",
        name: 'email'
    },
    {
        type: 'input',
        message: "Current Engineer's github Account",
        name:'github'
    }
]).then((response) => {
    const engineer = new Engineer(response.name, response.id, response.email, response.github);
    teamPicker.push(engineer);
    newTeamatePrompt();
})
}
const getIntern = () => {
inquirer.prompt([
    {
        type: 'input',
        message: "Name of Intern?",
        name: 'name'
    },
    {
        type: 'input',
        message: "Current Intern's ID?",
        name: 'id'
    },
    {
        type: 'input',
        message: "Current Intern's Email",
        name: 'email'
    },
    {
        type: 'input',
        message: "Current Intern's School?",
        name:'school'
    }
]).then((response) => {
    const intern = new Intern(response.name, response.id, response.email, response.school);
    teamPicker.push(intern);
    newTeamatePrompt();
})
}
const newTeamatePrompt = () => {
inquirer
    .prompt([
        {
            type: 'list',
            message: 'Are You Finnished, or add another Member?',
            name: 'newMember',
            choices: [
                'Engineer',
                'Intern',
                'Finn' ]
        }
    ]) .then((ans) => {
        switch (ans.newMember){
            case 'Engineer':
                getEngineer();
                break;
            case 'Intern':
                getIntern();
                break;
            case 'Finn':
                genTemplate(teamPicker)
                break;
        }
    })
}
const genTemplate = (teamMembers) => {
let html = htmlGen(teamMembers);
fileGen(html);
}
function init() {getManager();}
init();