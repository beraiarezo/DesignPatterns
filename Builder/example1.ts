class Person {
  streetAdress;
  postcode;
  city;
  companyName;
  position;
  annualIncome;
  constructor() {
    this.streetAdress = this.postcode = this.city = "";

    this.companyName = this.position = "";
    this.annualIncome = 0;
  }

  toString() {
    return (
      `Person lives at ${this.streetAdress}, ${this.city}, ${this.postcode}\n ` +
      `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
    );
  }
}

class PersonBuilder {
  person;
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person: Person) {
    super(person);
  }

  at(companyName: string) {
    this.person.companyName = companyName;
    return this;
  }

  asA(position: string) {
    this.person.position = position;
    return this;
  }

  earning(earning: number) {
    this.person.annualIncome = earning;
    return this;
  }

  build(): Person {
    return this.person;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person: Person) {
    super(person);
  }

  at(streetAdress: string) {
    this.person.streetAdress = streetAdress;
    return this;
  }

  whithPostcode(code: string) {
    this.person.postcode = code;
    return this;
  }

  in(city: string) {
    this.person.city = city;
    return this;
  }

  build(): Person {
    return this.person;
  }
}

let pb = new PersonBuilder();
let person = pb.lives
  .at("123 London Road")
  .in("London")
  .whithPostcode("SW555")
  .works.at("Google Inc.")
  .asA("Software engineer!")
  .earning(123000)
  .build();

console.debug(person.toString(), "person");
