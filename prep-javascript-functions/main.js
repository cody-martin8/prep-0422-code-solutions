function combineTwoNumbers(x, y) {
  return x + y;
}

var sum = combineTwoNumbers(4, 4);
console.log('sum', sum);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addition = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addition);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log('getGreeting Exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var expression1 = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', expression1);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var expression2 = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', expression2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var expression3 = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', expression3);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  return number * number * number;
}

var getCube = cube(5);
console.log('cube Exercise:', getCube);
