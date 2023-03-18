const Intern = require('../lib/Intern');


describe('Intern', () => {
    describe('Initialization', () => {
        it('returns Intern role object', () => {
            const engineer = new Engineer('Dave', 271, 'Dave@yahoo.com', 'davesSchool')
            expect(engineer.name).toEqual('Dave');
            expect(engineer.id).toEqual(271);
            expect(engineer.email).toEqual('Dave@yahoo.com');
            expect(intern.school).toEqual('davesSchool');
        })
    })
    describe('getGitHub', () => {
        it('Returns Intern Git hub link', () => {
            const Intern = new Engineer('Dave', 271, 'Dave@yahoo.com', 'davesSchool')
            expect(intern.getSchool()).toEqual('davesSchool');
        })    
    })
    describe('getRole', () => {
        it('returns the Intern Role', () => {
            const Intern = new Engineer('Dave', 271, 'Dave@yahoo.com', 'davesSchool')
            expect(intern.getRole()).toEqual('Intern')
        })
    })
})