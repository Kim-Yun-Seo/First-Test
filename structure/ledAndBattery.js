class Battery {
  static unit = 'mA';
  remainVolume = 0; 
  remainVolumeDisplay = 0; 
  
  constructor(maxVolume, input, output) {
    this.maxVolume = maxVolume;
    this.input = input;
    this.output = output;    
  }

  inputCharge(volume) {
    this.remainVolume += volume;   
    console.log('inputCharge = ', this.remainVolume); 
    this.showRemainVolume();
    return this.remainVolume;
  }
  outputCharge(volume) {
    if ( this.remainVolume < volume ) {
      console.log(" 더 이상 작동 하지 않습니다. ");
    } else {
      this.remainVolume -= volume;  
      console.log(" 작동 하였습니다  ");
    }
    this.showRemainVolume();
    return this.remainVolume;
  }

  showRemainVolume() {
    this.remainVolumePercent = ( this.remainVolume / this.maxVolume ) * 100;
    // console.log(this.remainVolumePercent, '%');
    if (this.remainVolumePercent === 0) { 
      console.log('충전된 전기가 없어서 불이 안 켜짐.');
    } else if (this.remainVolumePercent <= 25 ) {
      console.log('불이 하나 켜짐');
    } else if(this.remainVolumePercent <= 50) {
      console.log('불이 두개 켜짐')
    } else if(this.remainVolumePercent <= 75) {
      console.log('불이 세개 켜짐')
    } else if(this.remainVolumePercent <= 100) {
      console.log('불이 네개 켜짐')
    } 
  }
}
const Shaomibattery = new Battery('10000', 'usb-A', 'usb-micro');
Shaomibattery.inputCharge(0);
Shaomibattery.outputCharge(10);


class LED {
  //1 전구가 있다.
  //2 전기가 오면 켜진다. 
  currentbulb = 'off';
  // 전구는 꺼진 상태로 있다.  

  //전기를 받은만큼 키기 가능.
  //버튼이 있다
  //버튼으로 전구를 끄고 키기 가능
  constructor(bulb) {
    this.bulb = bulb
  }
  bulbOn(battery) {
    //voltage가 들어오면 currentbulb가 on.
    // 콘솔에 출력 한다. 

    console.log('받은 전기는 얼마인가? ', battery.remainVolume);
    if (battery.remainVolume > 0) {
      console.log('전구가 켜졌다.');
    } else {
      console.log('전기가 없어 전구가 켜지지 않았다.');
    }
  
    // shaomibattery.outputCharge(2000);   
    return battery;
    // console.log( `${this.light} : boom! `)
  }
}
const campingLED = new LED('bright')

campingLED.bulbOn(Shaomibattery);