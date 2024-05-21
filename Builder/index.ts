class Tag {
  name;
  text;
  children: any[];

  static get indentSize() {
    return 2;
  }

  constructor(name = "", text = "") {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  toStringImpl(indent: number) {
    let html = [];
    let i = " ".repeat(indent * Tag.indentSize);
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0) {
      html.push(" ".repeat(Tag.indentSize * (indent + 1)));
      html.push(this.text);
      html.push("\n");
    }

    for (let h of this.children) {
      html.push(h.toStringImpl(indent + 1));
    }

    html.push(`${i}</${this.name}>\n`);
    return html.join("");
  }

  toString() {
    return this.toStringImpl(0);
  }

  static create(name: string) {
    return new HtmlBuilder(name);
  }
}

class HtmlBuilder {
  root;
  rootName;
  constructor(rootName: string) {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  addChild(childName: string, childText: string) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
  }

  addChildFluent(childName: string, childText: string) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
    return this;
  }

  toString() {
    return this.root.toString();
  }

  build() {
    return this.root;
  }

  clear() {
    this.root = new Tag(this.rootName);
  }
}

let builder = Tag.create("ul");
builder.addChildFluent("li", "foo").addChildFluent("li", "baz");

console.debug(builder.toString());
