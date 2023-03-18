const Manager = require('../lib/manager');


describe('Manager', () => {
    describe('Initialization', () => {
        it('returns Manager role object', () => {
            const manager = new Manager('Dave', 271, 'Dave@yahoo.com', '45')
            expect(manager.name).toEqual('Dave');
            expect(manager.id).toEqual(271);
            expect(manager.email).toEqual('Dave@yahoo.com');
            expect(manager.officeNum).toEqual('45');
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