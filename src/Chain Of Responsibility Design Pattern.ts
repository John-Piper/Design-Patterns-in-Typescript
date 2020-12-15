// Chain of Responsibility design pattern.

class Tea {
  private milk: boolean;
  private suger: boolean;

  constructor() {
    this.milk = false;
    this.suger = false;
  }

  set setMilk(b: boolean) {
    this.milk = b;
  }

  set setSuger(b: boolean) {
    this.suger = b;
  }

  public drink(): void {
    console.log("Drinking tea with ");
    if (this.milk) {
      console.log("milk and ");
    } else {
      console.log("no milk and ");
    }
    if (this.suger) {
      console.log("suger.");
    } else {
      console.log("no suger.");
    }
  }
}

interface Chain {
  setNextChain(nextChain: Chain): void;

  nextInstruction(tea: Tea): void;
}

class AddMilk implements Chain {
  private chain: Chain | null;
  constructor() {
    this.chain = null;
  }

  public setNextChain(chain: Chain): void {
    this.chain = chain;
  }

  public nextInstruction(tea: Tea): void {
    console.log("Adding milk");
    tea.setMilk = true;
    if (this.chain) {
      this.chain.nextInstruction(tea);
    }
  }
}

class AddSuger implements Chain {
  private chain: Chain | null;

  constructor() {
    this.chain = null;
  }

  public setNextChain(chain: Chain): void {
    this.chain = chain;
  }

  public nextInstruction(tea: Tea): void {
    console.log("Adding suger");
    tea.setSuger = true;
    if (this.chain) {
      this.chain.nextInstruction(tea);
    }
  }
}

class DrinkTea implements Chain {
  private chain: Chain | null;

  constructor() {
    this.chain = null;
  }

  public setNextChain(chain: Chain): void {
    this.chain = chain;
  }

  public nextInstruction(tea: Tea): void {
    tea.drink();
  }
}

class Client {
  private chainOne: Chain;

  constructor() {
    this.chainOne = new AddMilk();
    const chainTwo = new AddSuger();
    const chainThree = new DrinkTea();

    this.chainOne.setNextChain(chainTwo);
    chainTwo.setNextChain(chainThree);
  }

  public startChain(tea: Tea): void {
    this.chainOne.nextInstruction(tea);
  }
}

const client = new Client();

client.startChain(new Tea());

// Adding milk
// Adding suger
// Drinking tea with
// milk and
// suger.
