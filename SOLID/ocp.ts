enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

class Product {
  name;
  color;
  size;

  constructor(name: string, color: Color, size: Size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

// open for extension, closed for modification

interface specs {
  isSatisfied: (item: Product) => boolean;
}

class AndSpecification {
  specs;
  constructor(...specs: specs[]) {
    this.specs = specs;
  }

  isSatisfied(item: Product) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

class ColorSpecification {
  color;
  constructor(color: Color) {
    this.color = color;
  }

  isSatisfied(item: Product) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  size;
  constructor(size: Size) {
    this.size = size;
  }

  isSatisfied(item: Product) {
    return item.size === this.size;
  }
}

let apple = new Product("Apple", Color.Green, Size.Small);
let tree = new Product("Tree", Color.Green, Size.Large);
let house = new Product("House", Color.Blue, Size.Large);

let products = [apple, tree, house];

class BetterFilter {
  filter(items: Product[], spec: AndSpecification) {
    return items.filter((x) => spec.isSatisfied(x));
  }
}

let bf = new BetterFilter();

console.log("Large and green products:");

let as = new AndSpecification(
  new SizeSpecification(Size.Large),
  new ColorSpecification(Color.Green)
);

for (let p of bf.filter(products, as)) {
  console.log(`*Product: ${p.name} is Large and green`);
}
