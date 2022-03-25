// 1. Object to JSON


console.log('true');
let json = JSON.stringify(['apple','banana']);
console.log(json, typeof json);

let json2 = JSON.parse(`["apple","banana"]`);
console.log(json2);

console.log('new Date() ', new Date(), '---', typeof new Date())
// 2. JSON to Object 

let me = { 
  name: 'Grace',
  age: 20,
  isMarry: false,
  birthday : new Date(),
  eat0: function(food) {
    return food;
  },
  eat1: (food) => food ,
  eat2(food) {
    return food;
  },

  eat(food) {
    console.log('eating' + food);
    return food;
  }
}

console.log(me.eat('ice'),'를 먹다');
// let myself = JSON.stringify(me);
// console.log(myself);
// console.log('000909080980980980980')

// let myself2 = JSON.parse(myself, (key, value) => {
//   console.log(`typeof: ${typeof value}`);
//   return key === 'birthday' ? new Date(value) : value;
// })
// console.log('typeof =', typeof myself2.birthday);
// console.log('myself2=' , myself2);
// // console.log(typeof myself2.birthday);


