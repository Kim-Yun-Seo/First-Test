'use strict';

console.log(1)
window.setTimeout(() => {
  console.log(2)
}, 1000)
console.log(3);

function runPrint(x) {
  x();
}
function print() {
  console.log('푸린트');
}
runPrint(print);

(() => {
  console.log('푸린트');
})()


console.clear();


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
//프롬프터 띄워서 입력칸 만들기.
// userStorage 실행 해야함. -> 그 인자인 loginUser 불러와서

userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      onSuccess => console.log(`Hello ${onSuccess.name}, welcome ${onSuccess.role}`),
      error => console.log(error)
    )
  },
  error => console.log(error)
);

// userStorage.loginUser(
//   id,
//   password,
//   // getRoles를 부여하는 함수호출이 필요함.
//   // user === onSuccess(함수)
//   //onSuccess 함수는 getRoles를 실행하는 함수.
//   user => {
//      //getRoles에 인자를 줘야함.
//     //(user, onSuccess, onError)가 인자임.
//     //onSuccess를 하면 입력완료 환영 문자가 출력
//     userStorage.getRoles(
//       id,
//       onSuccess => {
//         console.log(`Hello ${onSuccess.name}, welcome ${onSuccess.role}`);
//       })},
//   error => {
//     console.log(error); // 함수 이름이랑 다르면 호출이 안됨.
//   }
// );


