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

