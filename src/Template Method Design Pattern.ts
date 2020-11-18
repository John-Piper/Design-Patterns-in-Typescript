abstract class wakeUpRoutine {
  runMorningRoutine(): void {
    this.wakeUp();
    this.getDress();
    this.eatBreakfast();
    this.brushTeeth();
  }
  abstract wakeUp(): void;
  abstract getDress(): void;
  abstract eatBreakfast(): void;
  abstract brushTeeth(): void;
}

class humanWakeUpRoutine extends wakeUpRoutine {
  wakeUp(): void {
    console.log("Human wakes up after pressing the snooze button 3 times");
  }
  getDress(): void {
    console.log("Human gets dressed");
  }
  eatBreakfast(): void {
    console.log("Human eats a slice of toast");
  }
  brushTeeth(): void {
    console.log("Human brushes theeth");
  }
}

class monsterWakeUpRoutine extends wakeUpRoutine {
  wakeUp(): void {
    console.log(
      "Monster is angry alarm clock woke him.  Monster smashes alarm clock"
    );
  }
  getDress(): void {
    console.log("Monster keeps on the same clothes he slept in");
  }
  eatBreakfast(): void {
    console.log("Monster eats a bucket of worms");
  }
  brushTeeth(): void {
    console.log("Monster does not brush his teeth");
  }
}

const human = new humanWakeUpRoutine();
const monster = new monsterWakeUpRoutine();

human.runMorningRoutine();
//Human wakes up after pressing the snooze button 3 times
//Human gets dressed
//Human eats a slice of toast
//Human brushes theeth

monster.runMorningRoutine();
//Monster is angry alarm clock woke him.  Monster smashes alarm clock
//Monster keeps on the same clothes he slept in
//Monster eats a bucket of worms
//Monster does not brush his teeth
