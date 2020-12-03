interface Machine {
  turnSwitch(): void;
  makeNoise(sound: String): void;
  move(): void;
  offMode(): void;
  checkState(): boolean;
}

class Robot implements Machine {
  isOn: boolean;
  constructor() {
    this.isOn = false;
    this.turnSwitch();
  }
  turnSwitch() {
    if (this.checkState()) {
      this.isOn = false;
      console.log("Robot is now off");
    } else {
      this.isOn = true;
      console.log("Robot is now on");
    }
  }
  makeNoise(sound: String) {
    if (this.checkState()) {
      console.log(sound);
    } else {
      this.offMode();
    }
  }
  move() {
    if (this.checkState()) {
      console.log("Robot moving 2cm");
    } else {
      this.offMode();
    }
  }
  offMode() {
    if (!this.checkState()) {
      console.log("...");
    }
  }
  checkState() {
    return this.isOn;
  }
}

interface Human {
  changeState(): void;
  speak(words: String): void;
  walk(): void;
  sleeping(): void;
}

class Man implements Human {
  isAwake: boolean;

  constructor() {
    this.isAwake = true;
    console.log("Man is now here");
  }
  changeState() {
    if (this.isAwake) {
      this.isAwake = false;
      console.log("Man is now sleeping");
      this.sleeping();
    } else {
      this.isAwake = true;
      console.log("Man is now awake");
    }
  }
  speak(words: String) {
    if (this.isAwake) {
      console.log(words);
    } else {
      this.sleeping();
    }
  }
  walk() {
    if (this.isAwake) {
      console.log("Man is walking 10cm");
    } else {
      this.sleeping();
    }
  }
  sleeping() {
    if (!this.isAwake) {
      console.log("zzzzzZZZZZZZZ snore zzzzzzZZZZZ");
    }
  }
}

class RobotAdapter implements Human {
  robot: Machine;
  constructor(robot: Machine) {
    this.robot = robot;
    this.changeState();
  }
  changeState() {
    this.robot.turnSwitch();
  }
  speak(words: String) {
    this.robot.makeNoise(words);
  }
  walk() {
    if (this.robot.checkState()) {
      for (let i = 0; i < 5; i++) {
        this.robot.move();
      }
    } else {
      this.sleeping();
    }
  }
  sleeping() {
    this.robot.offMode();
  }
}

const johnnyFive = new Robot();

johnnyFive.makeNoise("100010100010100100010");
johnnyFive.move();
johnnyFive.turnSwitch();
johnnyFive.move();

//Robot is now on
//100010100010100100010
//Robot moving 2cm
//Robot is now off
//...

const newtonCrosby = new Man();

newtonCrosby.speak("Hello World");
newtonCrosby.walk();
newtonCrosby.changeState();
newtonCrosby.walk();

//Man is now here
//Hello World
//Man is walking 10cm
//Man is now sleeping
//zzzzzZZZZZZZZ snore zzzzzzZZZZZ
//zzzzzZZZZZZZZ snore zzzzzzZZZZZ

const johnnyFiveAlive = new RobotAdapter(johnnyFive);

johnnyFiveAlive.speak("Johnny Five is Alive");
johnnyFiveAlive.walk();
johnnyFiveAlive.speak("Input");
johnnyFiveAlive.changeState();
johnnyFiveAlive.walk();
johnnyFiveAlive.sleeping();

//Robot is now on
//Johnny Five is Alive
//Robot moving 2cm
//Robot moving 2cm
//Robot moving 2cm
//Robot moving 2cm
//Robot moving 2cm
//Input
//Robot is now off
//...
//...
