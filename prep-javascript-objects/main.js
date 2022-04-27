const person = {
  firstName: 'Cody',
  lastName: 'Martin',
  hobby: 'comic books'
};
console.log(person);
person.job = 'DMV Title Clerk at AutoNation';
person.previousJob = 'DMV Title Clerk at AAA';

var fullName = person.firstName + ' ' + person.lastName;
console.log('This person\'s name is:', fullName);
console.log('This person\'s current job is:', person.job);
console.log('This person\'s previous job is:', person.previousJob);
console.log('The complete person object:', person);
