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

class Util {
  static increment(num) { return num + 1; }
}
console.log(Util.increment(5));

// Get / set
class O {
  constructor() {
    this.mx = 'initial';
  }

  get x() {
    return this.mx;
  }

  set x(val) {
    this.mx = val;
  }
}

const o = new O();
console.log(o.x);
o.x = 'new value';
console.log(o.x);

// New looping syntax
const arr = ['aaa', 'bbb', 'cccc'];
// for (const i in arr) {
//   console.log(i);
// }

for (const n of arr) {
  console.log(n);
}

// Parse a string into an array
console.log(Array.from('abs'));

// Iterate over a map
const m = new Map([...'abcd'].map(xx => [xx, xx + xx]));
console.log(m);
console.log(JSON.stringify([...m]));
console.log(JSON.stringify([...m.keys()]));
console.log(JSON.stringify([...m.values()]));
console.log(JSON.stringify([...m.entries()]));

// Fat arrow function
const getSquare = numVal => numVal * numVal;
const getSumOfTwo = (valA, valB) => {
  const sum = valA + valB;
  return sum;
};
console.log(getSquare(5));
console.log(getSumOfTwo(2, 2));

// Use of const
{
  const a = 'initial value';
  console.log(a);
//   a = 'new value';
//   console.log(a);
}

// Closures
{
  const add = (function () {
    let counter = 0;
    return function () {
      counter += 1;
      return counter;
    };
  }());
  console.log(add());
  console.log(add());
  console.log(add());
}
