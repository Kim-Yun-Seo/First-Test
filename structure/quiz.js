'use strict';

//1. 배열을 스트링으로 변환
const fruitsArray = ['apple','banana','orange'];

// const fruitsChangeString = fruitsArray.join();
console.log(fruitsArray.join());
//join은 배열은 문자열로 바꿔주는 함수임.
//param으로 string을 받음. - 그걸로 배열을 나눠서 적음.
//return = string.

//2. 스트링을 배열로 변환
const fruitsString = 'apple, kiwi, banana, cherry';

// const fruitsChangeArray = fruitsString.split(',');
console.log(fruitsString.split(','));

//split은 스트링은 배열로 바꿔주는 함수임.
//param으로 (seperator: string, limit: number) - sperator로 나누고, limit으로 length 결정
//return = Array

//3. 배열 순서 뒤집기
const numberArray = [1,2,3,4,5];

// const numberReverseArray = numberArray.reverse();
console.log(numberArray.reverse());

//reverse는 주어진 배열을 뒤집는 함수.
//param없음
//return = Array(자기자신)

//4. 요소를 제거하고 새로운 배열 생성

const deleteArray = [1,2,3,4,5];
// const deleteNewArray = deleteArray.splice(0,2);
// console.log(deleteNewArray);
// console.log('1', deleteArray.slice(0,2));
// console.log(deleteArray.slice(2,5))
const deleteNewArray = [...deleteArray].splice(2);

//어디서부터 몇개를 지울거냐.
// console.log(deleteArray.splice(2));
console.log('aaa', deleteNewArray);
console.log('bbb', deleteArray);
// console.clear();

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45), //{name: 'A', age: 29, enrolled: true, score: 45}
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// console.log(students.some() => {

// })



const studentFinder = students.filter(function (student, index ) {
  return student.score === 90;
})
console.log(studentFinder);


// 검색어 = array에서 object의 특정 key 값 찾기

// console.log(students)
// 5. 주어진(90) 생성자값을 가진 오브젝트 찾기.
// 생성자 score 값이 90인 친구의 index number. 
// array 에서 obj의 key가 score이고 그 값이 90인 obj찾기

//6.

const studentFinder2 = students.filter((student) => {
  return student.enrolled === true;
})
console.log(studentFinder2);

//6-1. 

const studentFinder3 = students.filter((student) => {
  // if (student.age > 29 ) {
  //   return true;
  // }
  return student.age > 29; //비교문의 결과는 bool 값이어서 여기선 리턴이 필요 없음.
})
console.log(studentFinder3);
// console.clear();

//7. 정해진 value 값만 모아서 array 만들기.
//검색어 : js array 안에 있는 object value 확인
// console.log('aa' , Object.values(students));
const aaa = {name: 'altari', age: 33}
// students.forEach
let obj_key = Object.keys(aaa);
console.log('obj_key = ',obj_key);
// map, values, keys 사용

const studentMap = students.map((student) => {
  // console.log('Object.keys(student) = ', Object.keys(student))
  return student.score;
  // [] 거기에 student.score하나씩 넣고 싶어 
})
console.log('studentMap = ', studentMap );


//8. value 값이 50이하가 있는지 확인하기 - some,every 사용


console.log(students.some((student) => student.score < 50));

// console.log(students.every((student) => student.score < 60));


//9. value 값들의 평균 구하기.
// 총합을 구하고 그것을 숫자만큼 나눈다. 
//studentMap안에 있는 element들을 하니씩 빼오고 하니씩 더해서 length 만큼나누기
console.log((45+80+90+66+88)/5);
// (처음 요소 + 두번째0 요소 덧 기 .... 마지막 요소)/ 배열의 길이 만큼 

const ccc =  (studentMap[0] + studentMap[1] + studentMap[2] + studentMap[3] + studentMap[4]) / studentMap.length 
console.log('ccc = ', ccc);



let resultValue = 0;

for ( let i = 0; i < studentMap.length; i++ ) {
  // console.log(studentMap[i]);
  resultValue = resultValue + studentMap[i];
}
//부르는 방법 모르겠음.
//

console.log(resultValue/studentMap.length, '======= 출력');

//10. value(score) 값들을 string으로 출력하기.
console.log('10 = ', studentMap.join(',')); 

//bouns. 10번을 오름차순으로 정리(?) - sort 사용

const example = [80, 90, 88, 66, 45];
// console.log(example.sort()); //sort는 배열만 하더라.
// console.log(example.split(' ').sort());
//이렇게 하면 string이 아니라 array로 나옴.
const a = example
          // .split(' ')
          .sort((back, curr) => {
            console.log(back , '===', curr, ' => ', back - curr)
            return back - curr
          })
          .join(' ');
console.log(a)
// 얘는 성공


class Teacher {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const teachers = [
  new Teacher('A', 29, true, 45), //{name: 'A', age: 29, enrolled: true, score: 45}
  new Teacher('B', 28, false, 80),
  new Teacher('C', 30, true, 90),
  new Teacher('D', 40, false, 66),
  new Teacher('E', 18, true, 88),
];
// 0 + 1 + 2 + 3 + 4

// const teacherMap = teachers.map((teacher) => teacher.score);

const teacherScoreSum = teachers.reduce((previousValue, currentObject) => {
  return previousValue + currentObject.score;
}, 0);

console.log('teacherScoreAverage = ', teacherScoreSum / teachers.length);

