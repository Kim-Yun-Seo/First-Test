'use strict';

//컵라면 먹기
// class sabal {
//   constructor(noodle) {
//     this.noodle = noodle;
//   }

//   cook(material, temperature) { // water , 100
//     return new Promise((resolve, reject) => {
//       if ( material === 'water' && temperature === 100 ) {
//         resolve()
//       } else {
//         reject(new Error(' 조리할 수 없음.'))
//       }
//     })
//   }
//   finish() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('조리가 완료되었습니다.')
//       }, 300)
//     }) 
//   }
// }


class ElectricPot {
	constructor(voltage) {
    this.voltage = voltage;
		console.log(`${this._maximumCapacity}${this._unit}의 물을 끓일수 있는 포트를 준비 한다.`);
	}
  _toggleButton = false;
	_maximumCapacity = 500;
  _unit = 'cc';
  _temperature = 0;
  _maxWaterTemperature = 100;


	async on(liquid, amount) {
    this._toggleButton = true;
    this.displayButton();
    if (this._maximumCapacity > amount) {
      console.log(`전원 ON ${amount}${this._unit}의 물을 가열 한다.`);
      while (this._temperature < this._maxWaterTemperature) {
        await this.boil({liquid, amount});
      }
      return {liquid, amount, temperature: this._temperature}
    }
    // return new Promise((resolve, reject) => {
    //   resolve({liquid, amount, temperature: this._temperature})
    // })
	}

	off() {
    console.log(`물이 ${this._temperature}도 입니다.`);
    this._toggleButton = false;
    this.displayButton()
		
	}

  displayButton() {
    const aaa = this._toggleButton ? 'ON' : 'OFF';
    console.log(`포트의 전원이 ${aaa}되었습니다. `);
  }

  boil({liquid, amount}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (liquid === 'water') {
          const increase = this.voltage / amount * 10;
          const currentTemperature = this._temperature + increase;

          if (currentTemperature >= this._maxWaterTemperature) {
            this._temperature = this._maxWaterTemperature;
            this.off();
            // resolve({liquid, amount});
          } else {
            this._temperature = currentTemperature;
            console.log('물의 온도는 = ', Math.round(this._temperature), '도 입니다.');
            // reject(new Error('aaaa'));
            // this.boil({liquid, amount});
          }
          resolve({liquid, amount});
        }
      }, 100);
    });
	}
}

  const electricPot = new ElectricPot(220);
  // const sabalmyeon = new Ramun('사발');
  // const try01 = {liquid: 'water', temperature: 90};
  electricPot
  .on('water', 300)
  .then(console.log)
  // .then((value) => {console.log('value = ',value)})



  // .then((object) => electricPot.boil(object))
  // .catch(console.log)
  // .then(console.log)
  

  // const Yukgaejang = new sabal('flour'); 
// Yukgaejang
// .cook('water', 500)
// .catch((error) => console.log(error))
// .then((temperature) => Yukgaejang.finish(temperature))

// function doSomething(add) {
//   console.log(add());
// }

// function add(a,b) {
//   console.log(typeof a);
//   console.log(typeof b);
//   const sum = a + b;  
//   return sum;
// }

// doSomething(add());