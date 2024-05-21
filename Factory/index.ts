const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Point {
  x;
  y;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static get factory() {
    return new PointFactory();
  }
}

class PointFactory {
  newCartasianPoint(x: number, y: number) {
    return new Point(x, y);
  }

  static newPolarPoint(rho: number, theta: number) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

let p = Point.factory.newCartasianPoint(4, 5);
console.debug(p);

let p2 = PointFactory.newPolarPoint(4, 5);

console.debug(p2);

// ----

class HotDrinks {
  consume() {}
}

class Tea extends HotDrinks {
  consume(): void {
    console.debug("This tea is nice with lemon!");
  }
}

class Coffee extends HotDrinks {
  consume(): void {
    console.debug("Coffee is delicious!");
  }
}

interface HotDrinksFactory {
  prepare(amount: string): Tea | Coffee;
}

class TeaFactory implements HotDrinksFactory {
  prepare(amount: string) {
    console.debug(`Put in tea bag, boil water, pour ${amount}ml`);
    return new Tea();
  }
}

class CoffeeFactory implements HotDrinksFactory {
  prepare(amount: string) {
    console.debug(`Grind some bean, boil water, pour ${amount}ml`);
    return new Coffee();
  }
}

const AvailableDrinks = Object.freeze({
  tea: TeaFactory,
  coffee: CoffeeFactory,
});

class HotDrinksMachine {
  factory: { [key: string]: HotDrinksFactory };
  constructor() {
    this.factory = {};
    for (let drink in AvailableDrinks)
      this.factory[drink] = new AvailableDrinks[
        drink as keyof typeof AvailableDrinks
      ]();
  }

  interact(consumer: Function) {
    rl.question("Which Drink?", (answer: string) => {
      let str = answer.split(" ");
      let d = this.factory[str[0] as keyof typeof AvailableDrinks].prepare(
        str[1]
      );

      rl.close();

      consumer(d);
    });
  }
}

let machine = new HotDrinksMachine();

machine.interact(function consumer(d: Coffee | Tea) {
  d.consume();
});
