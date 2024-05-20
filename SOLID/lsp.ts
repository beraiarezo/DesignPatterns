//
interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  radius;
  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square implements Shape {
  sideLength;
  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }
  calculateArea() {
    return this.sideLength * this.sideLength;
  }
}

const useIt = function (shape: Shape) {
  return `Shape are: ${shape.calculateArea()}`;
};

console.debug(useIt(new Square(10)));
console.debug(useIt(new Circle(10)));
