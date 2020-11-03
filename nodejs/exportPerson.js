var Person = require('./Person');

var person = new Person('sree','bangalore');
person.printDetails();
person.greetMessage('have a good day');
console.log(Person.mobile);