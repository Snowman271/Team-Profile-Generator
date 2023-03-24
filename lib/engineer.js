const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.icon = 'fi fi-rr-settings'
        this.subClassQ = 'GitHub'
    }
    getGHlink(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
    getId() {
        return this.id
    }
}
module.exports = Engineer;