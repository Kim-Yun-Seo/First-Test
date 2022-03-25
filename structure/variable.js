// 'use strict';
console.log("Hello World!");


let kkk = {
  aaa: 'aaa',
}
let name = 'Grace';
console.log(name); 
name = 'altari';
console.log(name); 

console.log(age);
age = 4;


function ppp() { 
  return 'qqq'  
}

console.log(ppp());
var age;
const count =17;

console.log('value :'+ count+' type: '+ age);
console.log(`value : ${count} type: ${age}`);

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

const human = { name:'Grace' , age:20 };
console.log('Grace = ', human);
human.name= 'altari'


//1. Use strixt
//added in Es 5
// use this for Vanila Jacascript.
'use strict';

//2. Variable, rw(read/write)
//let (added in ES6)
let globalName = 'global name';
{
  let name = 'Grace';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);

}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting (move declaration from bottom to top)
//has no block scope
{
  age =4;
  var age;
}
console.log(age);

//3.Const, r(read only)
//use const whenever possible.
//only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//immutable data types: premitive types, frozen objexts
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasnos:
// - security
// - thread safety
// - reduce human mistakes

// Variable types
// primitive, single item: Number, string, boolean, null, undefined, Symbol
// Object, box Container
// function, first-class function
