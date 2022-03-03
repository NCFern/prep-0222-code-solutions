var person = {
  firstName: 'Nicholas',
  lastName: 'Fernandez',
  hobby: 'unicorn taming'
};

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is: ", fullName + ' ');

person.job = 'underwater basket weaver';

console.log("The person's current job is: " + person.job + ' ');

person.previousJob = 'Gordon Ramsey impersonator';

console.log("The person's previous job is: " + person.previousJob + ' ');

console.log('The complete person object: ', person);
