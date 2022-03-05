function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hour) {
  return (hour) * (60);
}

var hour = convertHoursToMinutes(2);
console.log('hour', hour);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';

  return result;
}

var greeting = getGreeting('Nick');
console.log('greeting', greeting);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var aaM = addAndMultiplyBy5(10, 5);
console.log('aaM', aaM);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var maD = multiplyAndDivideBy5(35, 10);
console.log('maD', maD);

function subtractTwoNumbers(x, y) {
  return (x - y);
}

var sub = subtractTwoNumbers(22, 7);
console.log('sub', sub);

function getCircleCircumference(radius) {
  return (radius * 2) * 3.14159;
}

var radius = getCircleCircumference(5);
console.log('radius', radius);

function getFullName(firstName, lastName) {

  var result = firstName + ' ' + lastName;
  return result;
}

var fullName = getFullName('Nicholas', 'Fernandez');
console.log('fullName:', fullName);


function cube(number) {
  return (number * number * number);
}

var number = cube(5);
console.log('number', number);
