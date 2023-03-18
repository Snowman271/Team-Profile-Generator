const Engineer = require('../lib/engineer');


describe('Engineer', () => {
    describe('Initialization', () => {
        it('returns engineer role object', () => {
            const engineer = new Engineer('Dave', 271, 'Dave@yahoo.com', 'DaveGHLink')
            expect(engineer.name).toEqual('Dave');
            expect(engineer.id).toEqual(271);
            expect(engineer.email).toEqual('Dave@yahoo.com');
            expect(engineer.github).toEqual('DaveGHLink');
        })
    })
    describe('getGHlink', () => {
        it('Returns Employees Git hub link', () => {
            const engineer = new Engineer('Dave', 271, 'Dave@yahoo.com', 'DaveGHLink')
            expect(engineer.getGHlink()).toEqual('DaveGHLink');
        })
    })
    describe('getRole', () => {
        it('returns the employees Role', () => {
            const engineer = new Engineer('Dave', 271, 'Dave@yahoo.com', 'DaveGHLink')
            expect(engineer.getRole()).toEqual('Engineer')
        })
    })
})