

const fruits = ['apple','banana'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (const fruit of fruits) { 
  console.log(fruit);
}
console.clear();

fruits.forEach( (fruit, index, currentArray, temp) => {
  console.log(fruit);
  console.log(index);
  console.log(currentArray);
  console.log(temp);
});

console.clear();

// fruits.forEach(fruits, index, array) => {
//   console.log(fruits);
// }

const family = ['apple','altari'];

fruits.forEach((param1, index, array) => {
  if (param1 !== 'apple') {
    console.log('참이면', param1);
  } else {
    console.log('틀리면',param1);
  }
  // console.log(param1);
});
const plant = [ ['바나나', '사과'] , ['나무', '꽃'] ];




plant[0].forEach((param1  ) => {
  let isApple = false;

  
  if (param1 !== '사과') {
    isApple = true;
  }
  console.log( isApple, param1);
});

console.clear();

for (let i = 0; i < 5; i++) {
  console.log(i, "생일축하해!!");
}
// console.clear();


let celebrateText = ['생','일','축','하','해'] ;
for ( let i = 0; i < 5; i++) {
  if (i === 0) {
    celebrateText.splice(0,0);
    celebrateText.splice(1,0,' ');
  } else if ( i === 1 ) {
    celebrateText.splice(1,1);
    celebrateText.splice(2,0,' ');
  } else if ( i === 2 ) {
    celebrateText.splice(2,1);
    celebrateText.splice(3,0,' ');
  } else if ( i === 3 ) {
    celebrateText.splice(3,1);
    celebrateText.splice(4,0,' ');
  } else if ( i === 4 ) {
    celebrateText.splice(4,1);
    celebrateText.splice(5,0,' ');
  }
  console.log(i, celebrateText);
}
// console.clear();
let sorry = ['잘','못','했','어','요'];

for ( let i = 0; i < sorry.length ; i++ ) {

  sorry.splice(i, (i === 0) ? 0 : 1); // 빼는 애
  sorry.splice(i + 1, 0, ' '); // 더하는 애
  console.log(i,sorry); 
}
// console.clear();

// let verySorry = ['매','우','잘','못','했','어','요'];

// for (let i = 0; i < verySorry.length ; i++) {
//   let tempArray = [];

//   verySorry.forEach((value, index) => {
//     tempArray.push(value);
//     if (index === i) {
//       tempArray.push(' ');
//     }
//   })
//   console.log(i,tempArray); 
// }
// console.clear();

//<잊지말자>
// for (let i = 0; i < soSorry.length; i ++ ) {
//   if (i = 0) {

//   }
//};
// console.log(soSorry);
// console.log(soSorry.replace('못','와'));


let soSorry = '잘못했어요';

for (let i = 1; i < soSorry.length; i++ ) {
  console.log(`${soSorry.slice(0, i)} ${soSorry.slice(i)}`);
};


// return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
//잘못했어요. for 돌릴건데 

// 잘 + newString + 못했어요.
// soSorry.slice(0, 1) + ' ' + soSorry.slice(1)
// 잘못 + newString + 했어요.
// soSorry.slice(0, 2) + ' ' + soSorry.slice(2)
// 잘못했 + newString + 어요.
//soSorry.slice(0, 3) + ' ' + soSorry.slice(3)
// 잘못했어 + newString + 요.
// soSorry.slice(0, 4) + ' ' + soSorry.slice(4)
// console.log(soSorry.slice(1));


console.clear();

let alpha = ['a','b','p','c','p','d'];

//add 'e'
alpha.push('e');
console.log('push',alpha);
alpha.shift();
console.log('shift',alpha);
alpha.unshift('a');
console.log('unshift',alpha);

alpha.splice(2, 1, 'k');
console.log(alpha);


console.log(alpha.indexOf(''));
//5.searching  
