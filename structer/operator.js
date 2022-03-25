console.log( "my" + " cat");
console.log("1" + 2);
console.log( `string literals 1+2 = ${1+2}  `)

let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
console.log( `${preIncrement}, ${counter}`)
const postIncrement = counter++;
console.log( `${postIncrement},  ${counter}` )
console.clear()


let aaa = {
  something: '승욱',
};


if (aaa !== null) {
  console.log(aaa.somethig);
}

function loop (last_value) {
  for ( let i = 2; i<last_value; i++) {
    console.log(i);
  }
}
console.log(loop(5 ));

const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);
console.clear()
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

const ttt = {};
console.log(typeof ttt);

console.clear();
let i = 3;
while (i>0) {
  console.log(`while :${i}`);
  i--;
}

for( i = 3 ; 0 < i ; i-- ) {
  console.log(`for ${i}`);
}

for( j = 3 ; 0 < j ; j-- ) {
  console.log(`for ${j}`);
} 
console.clear();

//구구단 만들기
for ( let i = 2; i <10; i++) {
  for ( let k = 1; k <10; k++) {
    console.log(`${i}*${k} = ${i*k}`);
  }
}

console.clear();


for ( let i = 0; i < 11; i++ ) {
  
  if ( i % 2 === 0 ) {
    console.log(i, '는 짝수야');
  } else {
    console.log(i, '홀수')
  }
  // console.log(`${i} 가 2로 나눠지는지 ..${i % 2 === 0}`)
}

console.clear();
for ( let i = 0; i < 11; i++ ) {
  if ( i % 2 !== 0) {
    continue;
  }
  console.log(i);
}


console.clear();
for ( let i = 0; i < 11; i++ ) {
  console.log(i)
  if ( i == 8 ) {
    break;
  }
}

console.clear();
 


