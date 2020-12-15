class SingletonNameMaker {
  private static instance: SingletonNameMaker;
  public name: string;
  constructor() {
    this.name = "";
  }

  public static getInstance(): SingletonNameMaker {
    if (!SingletonNameMaker.instance) {
      SingletonNameMaker.instance = new SingletonNameMaker();
    }

    return SingletonNameMaker.instance;
  }
  set setName(name: string) {
    this.name = name;
  }
  get getName(): string {
    return this.name;
  }
}

const jim = SingletonNameMaker.getInstance();
jim.name = "Jim";
console.log(jim.getName);
//Jim

const tim = SingletonNameMaker.getInstance();
console.log(tim.getName);
//Jim
tim.name = "Tim";

console.log(jim.getName);
// Tim
console.log(tim.getName);
// Tim

console.log(jim === tim);
// true
