const rewire = require('rewire');
const workDir = process.cwd();
const path = require('path');
const main = rewire( path.join(workDir, 'js/person.js') );

describe('3. Feladat', () => {
    it('Kellene lennie egy personDataLog nevű függvénynek.', () => {
        const personDataLog = main.__get__('personDataLog');
        expect(personDataLog).toBeTruthy();
    });
    
    it('A summation függvénynek az argumentumok összegével kell visszatérnie.', () => {
        const personDataLog = main.__get__('personDataLog');
        const mockPerson = {
            firstname: 'Bob',
            lastname: 'Marley',
            age: 88
        };
        
        const result = personDataLog(mockPerson);
        expect(result).toMatch(/bob.*marley.*88/i);
    });

});
