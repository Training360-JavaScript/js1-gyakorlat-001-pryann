const personDataLog = (person) => {
    person.firstname = person.firstname || 'John';
    person.lastname = person.lastname || 'Doe';
    person.age = person.age || 33;

    return `My name is ${person.firstname} ${person.lastname}. I'm ${person.age} years old.`;
};
