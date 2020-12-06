// Code idea learnt from Dmitri Nesteruk JS design Patterns on Udemy
// udemy.com/course/design-patterns-javascript/

class Civilian {
  name: String | null;
  age: number | null;
  job: String | null;
  streetAddress: String | null;
  state: String | null;
  constructor() {
    this.name = null;
    this.age = null;
    this.job = null;
    this.streetAddress = null;
    this.state = null;
  }
  toString(): String {
    return `Name: ${this.name} Age: ${this.age} 
            Job: ${this.job} Lives at ${this.streetAddress} 
            in ${this.state}`;
  }
}

class PersonBuilder {
  person: Civilian | null;
  constructor(person: Civilian | null = null) {
    if (person) {
      this.person = person;
    } else {
      this.person = new Civilian();
    }
  }
  get works(): PersonWorkBuilder {
    if (this.person) {
      return new PersonWorkBuilder(this.person);
    }
    return new PersonWorkBuilder(new Civilian());
  }
  get address(): PersonAddressBuilder {
    if (this.person) {
      return new PersonAddressBuilder(this.person);
    } else {
      return new PersonAddressBuilder(new Civilian());
    }
  }
  build(): String {
    if (this.person) {
      return this.person.toString();
    }
    return "No person property to build";
  }
}

class PersonWorkBuilder extends PersonBuilder {
  constructor(person: Civilian) {
    super(person);
  }
  addName(name: String): PersonWorkBuilder {
    if (name && this.person) {
      this.person.name = name;
    }
    return this;
  }
  addAge(age: number): PersonWorkBuilder {
    if (age && this.person) {
      this.person.age = age;
    }
    return this;
  }
  addJob(job: String): PersonWorkBuilder {
    if (job && this.person) {
      this.person.job = job;
    }
    return this;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person: Civilian) {
    super(person);
  }
  addStreetAddress(streetAddress: String): PersonAddressBuilder {
    if (streetAddress && this.person) {
      this.person.streetAddress = streetAddress;
    }
    return this;
  }
  addState(state: String): PersonAddressBuilder {
    if (state && this.person) {
      this.person.state = state;
    }
    return this;
  }
}

const person = new PersonBuilder();

person.works.addName("Saul Goodman").addAge(48).addJob("Lawyer");
person.address
  .addStreetAddress("9800 Montogomery Boulevard")
  .addState("New Mexico");

console.log(person.build());

// Name: Saul Goodman Age: 48
// Job: Lawyer Lives at 9800 Montogomery Boulevard
// in New Mexico
