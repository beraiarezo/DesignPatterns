// Dependency inversion principle, High level modules does not depend low level modules but both should depend on abstractions

let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }

  getName() {}
}

type data = { from: Person; type: number; to: Person };

//  LOW-LEVEL MODULE
interface RelationshipBrowser {
  findAllChildrenOf(name: string): Person[];
}

class Relationships implements RelationshipBrowser {
  data: data[];
  constructor() {
    this.data = [];
  }

  addParentAndChild(parent: Person, child: Person) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }

  findAllChildrenOf(name: string) {
    return this.data
      .filter((r) => r.from.name === name && r.type === Relationship.parent)
      .map((r) => r.to);
  }
}

// HIGH-LEVEL MODULE
class Research {
  constructor(browser: RelationshipBrowser) {
    for (let p of browser.findAllChildrenOf("John")) {
      console.debug(`John has a child called ${p.name}`);
    }
  }
}

let parent = new Person("John");
let child1 = new Person("chris");
let child2 = new Person("Matt");

let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);
