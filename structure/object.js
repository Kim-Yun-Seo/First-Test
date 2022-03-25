const aa = {
  a: 1,
  b: 2, 
}

console.log('hasOwnProperty = ', {}.hasOwnProperty.call(aa, 'a'));
console.log('in = ', 'a' in aa);

function print(person) {
  console.log(person.names);
  console.log(person.age);
}
const grace = { name: 'Grace' , age: 4};
print(grace);

grace.hasJob = true;
console.log(grace.hasJob);

console.log('aaa ', aa.hasHand);
console.log('bbb ', aa['hasHand']);

console.clear();

const user = { name: 'Grace' , age: 20 };//메모리 한부분에 다른 오브젝트를 저장한 주소가 들어간다. 
let users = ['altari', 'grace']; //메모리 한부분에 다른 오브젝트를 저장한 주소가 들어간다. 
const user2 = 'aaa'; //메모리 한부분에 에 text 들어감 
// const user2 = user;

// user.name = 'aaa';
// users = 'angela'; 

// console.log(users);
// // console.log(user);

// const user3 = {name: 'Grace', age: 20};
// for ( age in {  age: 20 } ) {
//   user3[age] = user[age];
// }
// Object.assign({}, user);
// console.log(user3)
// console.log(user3);
console.clear();
const fruit1 = {color: 'red'};
const fruit2 = { color:'blue' , size:'big'};
const fruit3 = { aaa:'ccc' , size:'yyy'};
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
// console.log(mixed.color);
// console.log(mixed.size); 
console.log('3 = ',fruit3);
console.log('2 = ',fruit2);
console.log('1 = ',fruit1);
console.log('4 = ', mixed);




