// State Design Pattern

//Allows an object to change its behaviour
//when the internal state changes.
//This is similar to Strategy Pattern.

interface RobotState {
  move(): void;
  speak(): void;
}

class RobotTurnOn implements RobotState {
  move(): void {
    console.log("Robot moving beep beep!!!");
  }
  speak(): void {
    console.log("00101010");
  }
}

class RobotTurnOff implements RobotState {
  move(): void {
    console.log("No movement.  Robot is turned off");
  }
  speak(): void {
    console.log("Silence.  Robot is turned off");
  }
}

class RobotStateContext implements RobotState {
  private currentState: RobotState;

  constructor() {
    this.currentState = new RobotTurnOff();
  }
  private changeState(newState: RobotState) {
    this.currentState = newState;
  }
  public switchState(stateInstruction: String): void {
    switch (stateInstruction) {
      case "turn on":
        this.changeState(new RobotTurnOn());
        console.log("Robot is now on Beep Beep...");
        break;
      case "turn off":
        this.changeState(new RobotTurnOff());
        console.log("Robot is now off...");
        break;
      default:
        console.log("Invalid instruction");
        break;
    }
  }
  public move(): void {
    this.currentState.move();
  }
  public speak(): void {
    this.currentState.speak();
  }
}

const mainProgram = () => {
  const brain = new RobotStateContext();

  brain.move();
  brain.speak();
  // No movement.  Robot is turned off
  // Silence.  Robot is turned off

  brain.switchState("turn on");
  //Robot is now on Beep Beep...

  brain.move();
  brain.speak();
  // Robot is now on Beep Beep...
  // Robot is now off...

  brain.switchState("dance");
  // Invalid instruction

  brain.switchState("turn off");
  //Robot is now off...

  brain.move();
  brain.speak();
  // No movement.  Robot is turned off
  // Silence.  Robot is turned off
};

mainProgram();
