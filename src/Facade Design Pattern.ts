//  Facade Design Pattern

// Provides a unified interface to a set of interfaces in a subsystem.
// Facade defines a higher level interface that makes the subsystem
// easier to use (Head First Design Patterns P264)

class CoffeeDrink {
  public brew(): void {
    console.log("Making coffee");
  }
  public drink(): void {
    console.log("Drinking coffee");
  }
}

class Poridge {
  public make(): void {
    console.log("Making Poridge");
  }
  public eat(): void {
    console.log("Eating Porridge");
  }
}

class AlarmClock {
  public alarmSound(): void {
    console.log("Alarm Clock makes a loud sound");
  }
  public snooze(): void {
    console.log("Snooze button pressed... Alarm to sound in 5 minutes...");
  }
  public turnOff(): void {
    console.log("Alarm Clock turned off");
  }
}

class Clothes {
  public getDressed(): void {
    console.log("Getting Dressed");
  }
}

class Cleaning {
  public brushTeeth(): void {
    console.log("Brushing teeth");
  }
  public haveShower(): void {
    console.log("Having a shower");
  }
}

class Car {
  public getInCar(): void {
    console.log("Getting in Car");
  }
  public driveToWork(): void {
    console.log("Driving to work");
  }
}

class Tv {
  public watch(): void {
    console.log("Watch Tv");
  }
}

class MorningRoutineFacade {
  coffeeDrink: CoffeeDrink;
  poridge: Poridge;
  alarmClock: AlarmClock;
  clothes: Clothes;
  cleaning: Cleaning;
  car: Car;
  tv: Tv;
  constructor(
    coffeeDrink: CoffeeDrink,
    poridge: Poridge,
    alarmClock: AlarmClock,
    clothes: Clothes,
    cleaning: Cleaning,
    car: Car,
    tv: Tv
  ) {
    this.coffeeDrink = coffeeDrink;
    this.poridge = poridge;
    this.alarmClock = alarmClock;
    this.clothes = clothes;
    this.cleaning = cleaning;
    this.car = car;
    this.tv = tv;
  }

  public getReadyForWork(): void {
    this.alarmClock.alarmSound();
    this.alarmClock.snooze();
    this.alarmClock.snooze();
    this.alarmClock.snooze();
    this.alarmClock.turnOff();
    this.cleaning.haveShower();
    this.clothes.getDressed();
    this.coffeeDrink.brew();
    this.poridge.make();
    this.poridge.eat();
    this.coffeeDrink.drink();
    this.cleaning.brushTeeth();
    this.car.getInCar();
    this.car.driveToWork();
  }

  public weekendRoutine(): void {
    console.log("Its the weekend");
    this.alarmClock.turnOff();
    this.coffeeDrink.brew();
    this.tv.watch();
    this.coffeeDrink.drink();
    this.tv.watch();
  }
}

const coffeeDrink = new CoffeeDrink();
const poridge = new Poridge();
const alarmClock = new AlarmClock();
const clothes = new Clothes();
const cleaning = new Cleaning();
const car = new Car();
const tv = new Tv();

const morningRoutineFacade = new MorningRoutineFacade(
  coffeeDrink,
  poridge,
  alarmClock,
  clothes,
  cleaning,
  car,
  tv
);

morningRoutineFacade.getReadyForWork();

// Alarm Clock makes a loud sound
// Snooze button pressed... Alarm to sound in 5 minutes...
// Snooze button pressed... Alarm to sound in 5 minutes...
// Snooze button pressed... Alarm to sound in 5 minutes...
// Alarm Clock turned off
// Having a shower
// Getting Dressed
// Making coffee
// Making Poridge
// Eating Porridge
// Drinking coffee
// Brushing teeth
// Getting in Car
// Driving to work

morningRoutineFacade.weekendRoutine();

// Its the weekend
// Alarm Clock turned off
// Making coffee
// Watch Tv
// Drinking coffee
// Watch Tv
