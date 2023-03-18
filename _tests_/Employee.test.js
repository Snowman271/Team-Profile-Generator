const Employee = require('../lib/employee');


describe('Employee', () => {
    describe('Initialization', () => {
        it('Returns the employee object that Is filled with employees info', () => {
            const employee = new Employee('Dave', 271, 'Dave@yahoo.com');
            expect(employee.name).toEqual('Dave');
            expect(employee.id).toEqual(271);
            expect(employee.email).toEqual('Dave@yahoo.com')
        })
    })

    describe('getName', () => {
        it('Returns your employees Name', () => {
            const employee = new Employee('Dave', 271, 'Dave@yahoo.com');
            expect(employee.name).toEqual('Dave');
        })
    })

    describe('getId', () => {
        it('returns your employees ID', () => {
            const employee = new Employee('Dave', 271, 'Dave@yahoo.com');
            expect(employee.id).toEqual(271);
        })
    })

    describe('getEmail', () => {
        it('returns your employee current email', () => {
            const employee = new Employee('Dave', 271, 'Dave@yahoo.com');
            expect(employee.email).toEqual('Dave@yahoo.com');
        })
    })
    describe('getRole', () => {
        it('should return the employees Role', () => {
            const employee = new Employee('Dave', 271, 'Dave@yahoo.com');
            expect(employee.getRole()).toEqual('Employee');
        })
    })
});