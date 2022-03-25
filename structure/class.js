'use strict';
// object-oriendted programming
// class: template
// object: instance of a class
// Javescript classes
// - introduced in Es6
// - syntactial sugar over prototype-based inheritance

//1. Class declarations
class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;

  }
  //method 
  speak() {
    console.log(`${this.name} : hello!`);
  }
}

const grace = new Person('Grace', 20);
console.log(grace);

console.clear();
class User {
  
  constructor(firstname, middlename, lastname, age) {
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.age = age;
  }
  
  get age() {
    console.log('여기는 get');
    return this._age;
  }
  set age(value) {
    console.log('여기는 set');
    this._age = value;
  }
  
  // setAge (tempAge) {
  //   this.age = tempAge;
  // }
}

const user1 = new User('Steve', 'a' ,'Jobs',-1);
console.log(user1._age);
// console.log(user1.age, user1.firstname, user1.middlename, user1.lastname);
// console.log(user1.setAge(20));
// console.log(user1.age);

console.clear();


class Article {
  static publisher = ' Dream Coding ';
  max = '777';
  constructor(ArticleNumber) {
    this.ArticleNumber = ArticleNumber
  }
  qqq () {
    return 'qqq';
  }
  static printPublisher() {
    console.log('aaa');
    console.log(Article.publisher);
  }
}
// const an = new Article(13);
// console.log('an.publisher = ',an.publisher);
// console.log('an.qqq() = ',an.qqq());
console.log('an.printPublisher() = ', Article.publisher);



// const posting = new Article('Grace');
// console.log(posting.ArticleNumber);
//Grace를 publisher라는 대명사로 받아서 변수 ArticleNumber에 
//대입을 하는거지. object는 ArticleNumber. 
//Publisher는 대명사니까 바껴도 됨.
//Grace가 들어간 Aritcle 판으로 찍어낸 obj가 변수 posting안에
//담긴것임. 그래서 posting안에 grace재료로 만들어진 obj 들어있는거임.
//new 가 instance 하는 과정임. 

// 분별의 변수 posting을 선언을 하고 posting이 가리키는 메모리에
// 저장을 할건데 뭘 할거냐면 새로 Grace라는 재료를 가지고 
// Article (class)틀로 찍어낸(new=instance화) obj를 저장할거야.
// console.clear();

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}
class Rectangle extends Shape {

}
const foursquare = new Rectangle( 20, 20,'blue');

foursquare.draw();

