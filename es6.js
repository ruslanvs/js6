const name = 'John';
const sentence = `Hi ${name},
how are you today?`;
console.log(sentence);

// Shorthand assignment
const x = 3;
const y = 5;
const dict = { x, y };
console.log(dict);

// Defining methods inside object literals
const foo = {
  tada(z) {
    return z + 1;
  },
};
console.log(foo.tada(1));

// Super calls for inherited methods
const bar = {
  toString() {
    return `${super.toString} with bar!`;
  },
};
console.log(bar.toString());

// Computed properties
const prop = 'Peter';
const d = {
  [prop]: `value for ${prop}`,
};
console.log(d);

class Jedi {
  constructor() {
    this.forceIsDark = false;
  }

  toString() {
    return (`${this.forceIsDark ? 'Join' : 'Fear is the path to'} the dark side`);
  }
}

class Sith extends Jedi {
  constructor() {
    super();
    this.forceIsDark = true;
  }
}

const joda = new Jedi();
const darth = new Sith();
console.log(joda.toString());
console.log(darth.toString());
