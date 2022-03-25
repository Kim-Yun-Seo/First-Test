'use strict';

//state(대기, 이행, 거부)를 알고 있어야함.
//producer 와 consumer 이 뭔지 알아야함.

// const promise = new Promise((resolve, reject) => {
//   console.log('doing something...');
// });

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    console.log('id  = ', id);
    console.log('password  = ', password);
    console.log('onSuccess  = ', onSuccess);
    console.log('onError  = ', onError);

    setTimeout(() => {
      if (
        (id === 'g' && password === '9') ||
        (id === 'grace' && password === '9') ||
        (id === 'altari' && password === '982103')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('오류가-- 발생했습니다.'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'grace') {
        onSuccess({ name: user, role: 'admin' });
      } else if (user === 'altari') {
        onSuccess({ name: user, role: 'member' });
      } else {
        onError(new Error('오류가 발생했습니다.'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('아이디를 입력하세요');
const password = prompt('비밀번호를 입력하세요');

const loginPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('실행되는중'),
    reject('거절됨')
  }, 1000);
})

loginPromise
.then(value => {
  console.log(value);
})
.then(password) //여기까진 잘 되는것 같음.
.then(userStorage.getRoles)
// .then(console.log(`Hello ${onSuccess.name}, welcome ${onSuccess.role}`))

const loginPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(id)
    reject(console.log('error'))
  },1000)
})

loginPromise2
.then(userStorage.getRoles)
.then()
.catch()