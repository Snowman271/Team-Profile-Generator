const Manager = require('../lib/manager');


describe('Manager', () => {
    describe('Initialization', () => {
        it('returns Manager role object', () => {
            const manager = new Manager('Dave', 271, 'Dave@yahoo.com', '45')
            expect(manager.name).toEqual('John');
            expect(manager.id).toEqual(1234);
            expect(manager.email).toEqual('john@gmail.com');
            expect(manager.officeNum).toEqual('21b');
        })
    })
    describe('getOfficeNum', () => {
        it('returns current employees office number', () => {
            const manager = new Manager('Dave', 271, 'Dave@yahoo.com', '45')
            expect(manager.getOfficeNum()).toEqual('45');
        })
    })
    describe('getRole', () => {
        it('returns Manager role', () => {
            const manager = new Manager('Dave', 271, 'Dave@yahoo.com', '45')
            expect(manager.getRole()).toEqual('Manager')
        })
    })
})