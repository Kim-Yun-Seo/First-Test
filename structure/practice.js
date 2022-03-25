'use strict';

// 배터리로 조명을 키는거
// 배터리를 먼저 만들고
class Battery {

  constructor(maxVolume) {
    this.maxVolume = maxVolume;
  }
  remainVolume = 0;
  
  getCharge(volume) {
    this.remainVolume += volume;
    this.showRemainVolume();
    return this.remainVolume;
  }
  giveCharge(volume) {
    // remainVolume 을 volume만큼 빼는거.
    if (this.remainVolume < volume) {
      console.log('giveCharge 더 이상 동작하지 않습니다. ');
    } else {
      this.remainVolume -= volume;
    }
    this.showRemainVolume();
    return volume;
  }
  showRemainVolume() {
    const remainVolumePercent = (this.remainVolume / this.maxVolume) * 100;

    if (remainVolumePercent <= 0) { 
      console.log('불 안 켜짐');
    } else { 
      if (remainVolumePercent <= 25) {
        console.log('불이 하나 켜짐');
      } else if (remainVolumePercent <= 50) {
        console.log('불이 두 개 켜짐');
      } else if (remainVolumePercent <= 75 ) {
        console.log('불이 세 개 켜짐')
      } else if (remainVolumePercent <= 100) {
        console.log('불이 네 개 켜짐');
      }
    }
  }
}
const shaomibattery = new Battery(10000);
shaomibattery.getCharge(10000);
// shaomibattery.giveCharge(3000);


class LED {
  constructor(volt) {
    this.volt = volt;
  }
  //property
  bulb = false;
  //method
  bulbOn (volt) { 
    // console.log('------',volt);
    // done 전기를 전달받고
    //받은 전기로 조명키고
    if (volt > 0) {
      this.bulb = true;
    }
    console.log('조명이 ', this.bulb, '되었다. ');
  }
}
console.log('shaomibattery.remainVolume = ', shaomibattery.remainVolume);
const campingLED = new LED(5000);
campingLED.bulbOn(shaomibattery.giveCharge(3000));
console.log('shaomibattery.remainVolume = ', shaomibattery.remainVolume);




