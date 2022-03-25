//Function
//- fundamental building block in the program
//- subprogram can be used multiple items
//- performs a task or calculataes a value

//1.Function declaration
//function name(param1, param2) { body... return;}
//one fucntion === one thing
// naming: do someghing, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

//2.Parameters
//primitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const grace = { name: 'Grace'};
changeName(grace);
console.log(grace);

//3.Default parameters (added in Es6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi');

//4.Rest parameters (added in ES6)
function printAll(...args) {
  for (let i =0; i<args.length; i++) {
    console.log(args[i]);
  }
}
  for (const arg of args) {
  console.log(arg);
}
args.forEach((arg) => console.log(arg));

//5.Local scope
let globalMessage = 'global'; // global variable








// function printHello() {
//   console.log('Hello');
// }
// printHello();

// function printTextParam ( param1, parma2 ) {
//   console.log( param1 + parma2 );
// }
// printTextParam ( 2 , 3 );

// const add = function (a,b) {
//   console.log(`a+b : ${a+b}`)
// }
// add (1,2);
// console.clear();

// const add2 = (a,b) => {
//   console.log(`${a+b}`);
//   return true;
// }
// console.log(add2(1,3));  

console.clear();

const calculate = (command, a, b) => {

  if ( command === 'add' ) { 
    return (a+b);
  }
  if ( command === 'substract') {
    return (a-b);
  }
  if ( command === 'multiply') {
    return (a*b);
  }
  if ( command === 'divide') {
    return (a/b);
  }
  if ( command === 'remainder') {
    return (a%b);
  }
}


const command = ['add', 'substract', 'multiply', 'divide', 'remainder'];
const a = 10;
const b = 5;
let result = '';
let kkk = `add=${calculate('add', a, b)}`;

for ( let i =0; i < command.length; i++) {
  result = result + command[i] + ': ' + calculate(command[i], a, b) + ',  ';
}

console.log(result);  

// console.log(`substract: ${calculate('substract', 1, 5)}` );
// console.log( `answer : $`)
// console.log(Array);

//반복을 하는데 5개의 string 문자가 반복적으로 들어와야함.
// const a = 10;
// const b = 5;
// let command = 'add'
// for ( let i =1; i <6; i++) {
//   console.log( 'add' , a, b)
// }

// const a = 4; 
// const b = 0;
// const commandArray = [
//   'add',
//   'substract',
//   'multiply',
//   'divide',
//   'remainder',
//   'aa'
// ];
// commandArray.forEach((command) => {
//   console.log(`${command}: ${calculate(command, a, b)}` );
// });
// for ( let i = 1; i < 6; i++ ) {
//   const a = 1; 
//   const b = 5;
// }

// console.log(`substract: ${calculate('substract', 1, 5)}` );
// console.log(`multiply: ${calculate('multiply', 1, 5)}` );
// console.log(`divide: ${calculate('divide', 10, 5)}` );
// console.log(`remainder: ${calculate('remainder', 11, 5)}` );



