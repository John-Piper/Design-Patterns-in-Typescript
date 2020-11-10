class PersonFactory {
    static makeMalePerson(name: string, age: number) {
        const gender = "Male";
        return new Person(gender, name, age);
    }
    static makeFemalePerson(name: string, age: number) {
        const gender = "Female";
        return new Person(gender, name, age);
    }
}

class Person {
    private gender: string;
    private name: string;
    private age: number;
    
    constructor(gender: string, name: string, age: number) {
        this.gender = gender;
        this.name = name;
        this.age = age;
    }
    public introduceYourSelf() {
        if (this.gender === "Female") {
            let liedAge: number;
            this.age > 50 ? liedAge = Math.round(this.age/2) : liedAge = this.age;
            console.log(`Hello everyone lovely to meet you.  My name is ${this.name}, I am ${liedAge}.`);
        }
        else {
            console.log(`Hi my name is ${this.name} and I am ${this.age}.`);
        }
    }
    public talkTo(person: Person) {
        console.log(`Hello my name is ${this.name} please introduce yourself.`);
        person.introduceYourSelf();
        console.log(`Nice to meet you ${person.name}.`);
    }
    public hasConversationWith(person: Person) {
        person.talkTo(this);
    }  
}

const john = PersonFactory.makeMalePerson("John", 36);
const jane = PersonFactory.makeFemalePerson("Maggie", 77);
john.talkTo(jane);
jane.talkTo(john);

const jimmy = PersonFactory.makeMalePerson("Jimmy", 51);
jimmy.hasConversationWith(jane);
