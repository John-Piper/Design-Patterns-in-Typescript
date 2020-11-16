class DrinkMaker {
    private onStatus = false;
    constructor(public drinkMakerName : string, public drinkName : string) {};
    public turnOn() : void {
        if(!this.onStatus) {
            this.onStatus = true;
            console.log(`${this.drinkMakerName} turned on`);
        }
        else {
            console.log(`${this.drinkMakerName} is already turned on`);
        }
    }
    public turnOff() : void {
        if(this.onStatus) {
            this.onStatus = false;
            console.log(`${this.drinkMakerName} is turned off`);
        }
        else {
            console.log(`${this.drinkMakerName} is already turned off`);
        }
    }
    public use() : void {
        if (this.onStatus) {
            console.log(`Making a ${this.drinkName}`);
        }
        else {
            console.log(`${this.drinkMakerName} is not turned on`);
        }
    }
    public serve() : void {
        console.log(`Serving a ${this.drinkName}`);
    }
};

interface Command {
    execute() : void;
}

class MakeDrink implements Command {
    drinkName : string;
    constructor(private drinkMaker: DrinkMaker ) {
        this.drinkName = drinkMaker.drinkName;
    };
    public execute() : void {
        this.drinkMaker.turnOn();
        this.drinkMaker.use();
        this.drinkMaker.turnOff();
        this.drinkMaker.serve();
    }
};

class Waiter {
    private orderList : MakeDrink[] = [];
    private lastCommand : MakeDrink | undefined = undefined;

    public takeOrder(command: MakeDrink) {
        this.orderList.push(command);
        console.log(`${command.drinkName} has been added to the list`);
    }
    public undoLastOrder() : void {
        if (this.orderList.length >= 1) {
            this.lastCommand = this.orderList.pop();
            if (this.lastCommand) {
                console.log(`${this.lastCommand.drinkName} has been taken out of the list`);
            }
        }
        else {
            console.log("No orders in the list");
        }
    }
        public redoLastOrder() : void {
            if (this.lastCommand) {
                this.orderList.push(this.lastCommand);
                console.log(`${this.lastCommand.drinkName} has been added back to the list`);
                this.lastCommand = undefined;
            }
            else {
                console.log("No orders to redo");
            }
        }
        public placeOrders() : void {
            if (this.orderList.length >= 1) {
                this.orderList.forEach((order : MakeDrink) => {
                    order.execute();
                });
            }
            else {
                console.log("No Orders in the list");
            }
        }
    }

const coffee = new DrinkMaker("Coffee Machine", "Coffee");
const smoothie = new DrinkMaker("Smoothie Machine", "Smoothie");
const milkshake = new DrinkMaker("Milkshake Machine", "MilkShake");

const makeCoffee = new MakeDrink(coffee);
const makeSmoothie = new MakeDrink(smoothie);
const makeMilkshake = new MakeDrink(milkshake);

const waiter = new Waiter();

waiter.takeOrder(makeCoffee);
waiter.takeOrder(makeSmoothie);
waiter.takeOrder(makeMilkshake);
waiter.placeOrders();

//Coffee has been added to the list
//Smoothie has been added to the list
//MilkShake has been added to the list
//Coffee Machine turned on
//Making a Coffee
//Coffee Machine is turned off
//Serving a Coffee
//Smoothie Machine turned on
//Making a Smoothie
//Smoothie Machine is turned off
//Serving a Smoothie
//Milkshake Machine turned on
//Making a MilkShake
//Milkshake Machine is turned off
//Serving a MilkShake

waiter.undoLastOrder();
waiter.undoLastOrder();
waiter.placeOrders();
//MilkShake has been taken out of the list
//Smoothie has been taken out of the list
//Coffee Machine turned on
//Making a Coffee
//Coffee Machine is turned off
//Serving a Coffee

waiter.undoLastOrder();
waiter.placeOrders();
waiter.redoLastOrder();
waiter.placeOrders();
//Coffee has been taken out of the list
//No Orders in the list
//Coffee has been added back to the list
//Coffee Machine turned on
//Making a Coffee
//Coffee Machine is turned off
//Serving a Coffee

