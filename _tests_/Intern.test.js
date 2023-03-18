const Intern = require('../lib/Intern');


describe('Intern', () => {
    describe('Initialization', () => {
        it('returns Intern role object', () => {
            const intern = new Intern('Dave', 271, 'Dave@yahoo.com', 'davesSchool')
            expect(intern.name).toEqual('Dave');
            expect(intern.id).toEqual(271);
            expect(intern.email).toEqual('Dave@yahoo.com');
            expect(intern.school).toEqual('davesSchool');
        })
    })
    describe('getGHlink', () => {
        it('Returns Intern Git hub link', () => {
            const intern = new Intern('Dave', 271, 'Dave@yahoo.com', 'davesSchool')
            expect(intern.getSchool()).toEqual('davesSchool');
        })    
    })
    describe('getRole', () => {
        it('returns the Intern Role', () => {
            const intern = new Intern('Dave', 271, 'Dave@yahoo.com', 'davesSchool')
            expect(intern.getRole()).toEqual('Intern')
        })
    })
})