'use strict';

//배터리 클래스 만들기
//전기를 전달하고 전달받음
//조명 켜지기

class Battery {
  constructor(fullVolume) {
    this.fullVolume = fullVolume;
  }
  //property
  remainVolume = 0;
  //method
  bright() {
    const remainVolumePercent = (this.remainVolume / this.fullVolume) * 100;
    //for 문으로 바꿀 수 있어야함.

    const array1 = new Array(0, 25, 50, 75, 100)
    const array2 = [0, 25, 50, 75, 100]

    if (remainVolumePercent <= 0) { 
      console.log('전등이 전부 꺼짐');
    } else { 
      if (remainVolumePercent <= 25) {
        console.log('전등이 하나 들어옴');
      } else if (remainVolumePercent <= 50) {
        console.log('전등이 두 개 들어옴');
      } else if (remainVolumePercent <= 75 ) {
        console.log('전등이 세 개 들어옴')
      } else if (remainVolumePercent <= 100) {
        console.log('전등이 전부 들어옴');
      }
    }
  }
  charged(volume) {
    this.remainVolume += volume;
    this.bright();
    return this.remainVolume;
  }
  charging(volume) {
    //remainVolume 보다 volume 이 크면 작동하면 안됨.
    // if, else 로 나눠서 표현
    if (this.remainVolume < volume) {
      console.log(" 충전이 불가능합니다. ");
    } else {
      this.remainVolume -= volume;
    }
    this.bright();
    return volume;
  }
}
class Led {
  constructor(watt) {
    this.watt = watt;
  }
  //property
  bulb = false;
  //method
  //electric을 받으면 전기가 켜져야함.
  //electric이 0보다 작으면 작동안됨.
  //위에 배터리 클라스의 remainVolume만큼만 충전가능
  bulbOn(electric) { // 베터리의 남은 량이아니고 지금 전구를 밝히는 전기의 량이 들어와야 한다. 
    //if, else 문으로 접근
    if (electric > 0) {
      this.bulb = true;
      console.log(this.bulb);
    } else { 
      console.log('조명이 작동하지 않는다.');
    }
  }
}
const shaomibattery = new Battery(20000);
const campingLED = new Led(10);
shaomibattery.charged(20000);
//여기까지 하면 20000이 충전됨. -> 전등이 전부 들어오게됨.

//그래서 20000이 남음.
// console.log('shaomibattery.remainVolume = ', shaomibattery.remainVolume);
campingLED.bulbOn(shaomibattery.charging(3000));
campingLED.bulbOn(shaomibattery.charging(3000));
// campingLED.bulbOn(shaomibattery.remainVolume);
console.log(shaomibattery.remainVolume);
//3000이 빠져나가도 17000이 남기때문에 전등은 계속 3개가 들어오는상태.
//근데 왜 조명이 작동을 안 함?

// bright() {
//   const remainVolumePercent = (this.remainVolume / this.fullVolume) * 100;
//   //for 문으로 바꿀 수 있어야함.
//   if (remainVolumePercent <= 0) { 
//     console.log('전등이 전부 꺼짐');
//   } else { 
//     if (remainVolumePercent <= 25) {
//       console.log('전등이 하나 들어옴');
//     } else if (remainVolumePercent <= 50) {
//       console.log('전등이 두 개 들어옴');
//     } else if (remainVolumePercent <= 75 ) {
//       console.log('전등이 세 개 들어옴')
//     } else if (remainVolumePercent <= 100) {
//       console.log('전등이 전부 들어옴');
//     }
//   }
// }

// forEach ( let i, i < 6 , i++) {
  
// }