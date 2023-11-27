This repository contains small tasks to help learn more of E6 javascript.  
Notes:  
- The `let` keyword in ES6 is used to declare variables that are block-scoped.
- The `const` keyword in ES6 is used to declare read-only variables that are block-scoped.
- Arrow functions provide a concise syntax to write function expressions in JavaScript. They are anonymous and change the way `this` binds in functions.
    ```javascript
    const add = (a, b) => a + b;
    console.log(add(1, 2)); // Outputs: 3
    ```
- The `...` operator in ES6 is known as the spread operator when used in an array and the rest operator when used in a function parameter list.
    ```javascript
    // Spread operator
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5]; // arr2 becomes [1, 2, 3, 4, 5]

    // Rest operator
    function sum(...args) {
        return args.reduce((previous, current) => {
            return previous + current;
        });
    }
    console.log(sum(1, 2, 3, 4)); // Outputs: 10
   ```
- The `for...of` statement in ES6 creates a loop that iterates over iterable objects.
    ```javascript
    let values = [1, 2, 3, 4];
    for (let value of values) {
        console.log(value);
    }
    // Outputs: 1, 2, 3, 4
    ```
- The `Map` object in ES6 holds key-value pairs and remembers the original insertion order of the keys.
    ```javascript
    let map = new Map();
    map.set('name', 'John');
    map.set('age', 30);

    for (let [key, value] of map) {
        console.log(`${key} = ${value}`);
    }
    // Outputs: "name = John", "age = 30"
    ```
- The `Set` object in ES6 lets you store unique values of any type, whether primitive values or object references.
    ```javascript
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(2); // This will not be added as 2 is already in the set

    for (let value of set) {
        console.log(value);
    }
    // Outputs: 1, 2, 3
    ```
- Classes in ES6 are a template for creating objects. They encapsulate data with code to manipulate that data.
    ```javascript
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }

        area() {
            return this.height * this.width;
        }
    }

    const rectangle = new Rectangle(5, 8);
    console.log(rectangle.area()); // Outputs: 40
    ```
- A `Promise` in ES6 is an object representing the eventual completion or failure of an asynchronous operation.
    ```javascript
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Promise resolved"), 1000);
    });

    promise.then(alert);
    ```
- `Symbol` in ES6 is a primitive data type. Each newly created symbol value has a unique identifier.
    ```javascript
    let sym1 = Symbol();
    let sym2 = Symbol('key'); // optional string key

    let obj = {
        [sym1]: "value"
    };

    console.log(obj[sym1]); // Outputs: "value"
    ```
- Default function parameters in ES6 allow named parameters to be initialized with default values if no value or undefined is passed.
    ```javascript
    function greet(name = "World") {
        return `Hello, ${name}!`;
    }

    console.log(greet()); // Outputs: "Hello, World!"
    console.log(greet("User")); // Outputs: "Hello, User!"
    ```
- The rest parameter syntax in ES6 allows us to represent an indefinite number of arguments as an array.
    ```javascript
    function sum(...args) {
        return args.reduce((previous, current) => {
            return previous + current;
        });
    }

    console.log(sum(1, 2, 3, 4)); // Outputs: 10
    ```
- The `includes()` method in ES6 determines whether one string may be found within another string.
    ```javascript
    let str = "Hello, world!";
    console.log(str.includes("world")); // Outputs: true
    console.log(str.includes("goodbye")); // Outputs: false
    ```
- The `startsWith()` method in ES6 determines whether a string begins with the characters of a specified string.
    ```javascript
    let str = "Hello, world!";
    console.log(str.startsWith("Hello")); // Outputs: true
    console.log(str.startsWith("world")); // Outputs: false
    ```
- The `endsWith()` method in ES6 determines whether a string ends with the characters of a specified string.
    ```javascript
    let str = "Hello, world!";
    console.log(str.endsWith("world!")); // Outputs: true
    console.log(str.endsWith("Hello")); // Outputs: false
    ```
- The `Array.from()` method in ES6 creates a new, shallow-copied Array instance from an array-like or iterable object. In the following example, Array.from() method is used to create a new array from a set object.
    ```javascript
    let set = new Set(['foo', 'bar', 'baz', 'foo']);
    let array = Array.from(set);

    console.log(array); // Outputs: ["foo", "bar", "baz"]
    ```
- The `Array.prototype.keys()` method in ES6 returns a new Array Iterator object that contains the keys for each index in the array.
    ```javascript
    let array = ['a', 'b', 'c'];
    let iterator = array.keys();

    for (let key of iterator) {
        console.log(key); // Outputs: 0, 1, 2
    }
    ```
- The `Array.prototype.find()` method in ES6 returns the first element in the array that satisfies the provided testing function.
    ```javascript
    let array = [5, 12, 8, 130, 44];
    let found = array.find(element => element > 10);

    console.log(found); // Outputs: 12
    ```
- The `Array.prototype.findIndex()` method in ES6 returns the index of the first element in the array that satisfies the provided testing function.
    ```javascript
    let array = [5, 12, 8, 130, 44];
    let foundIndex = array.findIndex(element => element > 10);

    console.log(foundIndex); // Outputs: 1
    ```
- Template literals (Template strings) in ES6 are string literals allowing embedded expressions.
    ```javascript
    let name = "John";
    let greeting = `Hello, ${name}!`;

    console.log(greeting); // Outputs: "Hello, John!"
    ```
- In ES6, you can create objects and define their properties using the object literal syntax.
    ```javascript
    let name = "John";
    let age = 30;

    let person = {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };

    person.greet(); // Outputs: "Hello, my name is John and I am 30 years old."
    ```
- You can create a function that takes parameters and returns a new object.
    ```javascript
    function createPerson(name, age) {
        return {
            name,
            age,
            greet() {
                console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
            }
        };
    }

    let person = createPerson("John", 30);
    person.greet(); // Outputs: "Hello, my name is John and I am 30 years old."
    ```
- You can iterate over the keys and values of an object in JavaScript using `Object.keys()` and `Array.prototype.forEach()`.
    ```javascript
    let person = {
        name: "John",
        age: 30
    };

    Object.keys(person).forEach(key => {
        let value = person[key];
        console.log(`Key: ${key}, Value: ${value}`);
    });
    ```
- You can check if an object has a specific property in JavaScript using `hasOwnProperty()` or the `in` operator.
    ```javascript
    let person = {
        name: "John",
        age: 30
    };

    console.log(person.hasOwnProperty('name')); // Outputs: true
    console.log('name' in person); // Outputs: true
    console.log(person.hasOwnProperty('address')); // Outputs: false
    console.log('address' in person); // Outputs: false
    ```
- You can check the installed version of Node.js by running the `node --version` command in PowerShell.
    ```powershell
    node --version
    ```
- Initialize a new npm project:
    ```bash
    npm init -y
    ```
- Install Jest, Babel, and ESLint as dev dependencies:
    ```bash
    npm install --save-dev jest @babel/core @babel/preset-env eslint
    ```
- Create a `.babelrc` file with the following configuration:
    ```json
    {
        "presets": ["@babel/preset-env"]
    }
    ```
- Initialize ESLint:
    ```bash
    npx eslint --init
    ```