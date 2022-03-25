class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'g' && password === '9') ||
          (id === 'grace' && password === '9') ||
          (id === 'altari' && password === '982103')
        ) {
          resolve(id);
        } else {
          reject(new Error('오류가-- 발생했습니다.'));
        }
      }, 500);
    })
    
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'grace') {
          console.log('ggggg')
          resolve({ name: user, role: 'admin' });
        // } else if (user === 'altari') {
        //   resolve({ name: user, role: 'member' });
        } else {
          reject(new Error(`${user} 는 Role이 없습니다`));
        }
      }, 500);
    })
  }
}

const userStorage = new UserStorage();
const id = 'altari'; //prompt('아이디를 입력하세요');
const password = '982103'; //prompt('비밀번호를 입력하세요');
//프롬프터 띄워서 입력칸 만들기.
// userStorage 실행 해야함. -> 그 인자인 loginUser 불러와서


userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => console.log(`Hello ${user.name}, welcome ${user.role}`))
.catch(console.log);

console.log(typeof userStorage.loginUser(id, password))
// userStorage.loginUser(
//   id,
//   password,
//   user => {
//     userStorage.getRoles(
//       user,
//       onSuccess => console.log(`Hello ${onSuccess.name}, welcome ${onSuccess.role}`),
//       error => console.log(error)
//     )
//   },
//   error => console.log(error)
// );