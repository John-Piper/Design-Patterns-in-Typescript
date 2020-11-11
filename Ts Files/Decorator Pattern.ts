abstract class Pizza {
    public abstract getDescription() : string
    public abstract getCost() : number 
};

abstract class PizzaDecorator extends Pizza {
    pizza: Pizza;
    constructor(pizza: Pizza) {
        super();
        this.pizza = pizza;
    }
};

class CheesePizza extends Pizza {
    description: string;
    price: number;
    constructor() {
        super();
        this.description = "Cheese Pizza ";
        this.price = 2.99;
    }
    getDescription() : string {
        return this.description;
    }
    getCost() {
        return this.price;
    }
};

class ExtraCheese extends PizzaDecorator {
    constructor(pizza: Pizza) {
        super(pizza);
    }
    getDescription() : string {
        return `${this.pizza.getDescription()}with extra cheese ` 
    }
    getCost() : number {
        return .50 + this.pizza.getCost();
    }
};

class ExtraMushrooms extends PizzaDecorator {
    constructor(pizza: Pizza) {
        super(pizza);
    }
    getDescription() : string {
        return `${this.pizza.getDescription()}with extra mushrooms ` 
    }
    getCost() : number {
        return .25 + this.pizza.getCost();
    }
};

class AddedChicken extends PizzaDecorator {
    constructor(pizza : Pizza) {
        super(pizza);
    }
    getDescription() : string {
        return `${this.pizza.getDescription()}with loads of Chicken ` 
    }
    getCost() : number {
        return 2.25 + this.pizza.getCost();
    }
};

const getPizzaDescription = (pizza : Pizza) : void => {
    console.log(`${pizza.getDescription()}£${pizza.getCost()}`);
};

let pizza : Pizza = new CheesePizza();

getPizzaDescription(pizza);

pizza = new ExtraCheese(pizza);
pizza = new ExtraMushrooms(pizza);
pizza = new AddedChicken(pizza);

getPizzaDescription(pizza);
