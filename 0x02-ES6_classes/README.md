# ES6 Classes README

## Table of Contents
- [Defining a Class](#defining-a-class)
- [Adding Methods to a Class](#adding-methods-to-a-class)
- [Static Method in a Class](#static-method-in-a-class)
- [Extending a Class](#extending-a-class)
- [Metaprogramming](#metaprogramming)

## Defining a Class

In ES6, classes provide a convenient way to define blueprints for creating objects. A class encapsulates data and behavior into a single unit.

```javascript
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    bark() {
        console.log("Woof!");
    }
}
```
## Adding Methods to a class

```javascript
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log("Vroom, vroom!");
    }
}
```

## Static Method in a Class

```javascript
class MathOperations {
    static add(x, y) {
        return x + y;
    }
}
```
