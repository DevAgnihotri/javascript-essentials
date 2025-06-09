# Introduction to JavaScript

JavaScript is a computer language that helps make web pages interactive. It runs inside your web browser and can also run on servers (using Node.js). JavaScript is easy to start with and is used on almost every website.

Think of a website like a house:

- **HTML** is the walls and roof (structure).
- **CSS** is the paint and furniture (style).
- **JavaScript** is the electricity and switches (makes things work and move).

## What are the features of JavaScript? (Covered Question)

- **Easy to Learn:** The basics are simple to pick up.
- **Runs in Browser:** No need to install anything extra to use it on websites.
- **Interpreted:** The browser reads and runs the code line by line.
- **Flexible Types:** You don’t have to say if something is a number or a word; JavaScript figures it out.
- **Object-Based:** You can group related data and actions together using objects.
- **Event-Driven:** JavaScript can react to things like clicks, typing, or mouse movement.
- **Works Everywhere:** It runs on all devices and operating systems with a browser.
- **First-Class Functions:** You can treat functions like any other value (store them in variables, pass them around).
- **Can Run on Servers:** With Node.js, JavaScript can also be used to build server-side programs.
- **Big Community:** Lots of help, code, and tools are available online.

**Example: Print “Hello” and use a FOR loop**

```javascript
console.log("Hello");
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}
```

---

# Creating Variables in JavaScript

Variables are like boxes where you store information. You can use three main ways to make a variable:

- **var:** Old way, works in the whole function or globally.
- **let:** Newer, works only inside the nearest curly braces `{}` (block).
- **const:** Like let, but you can’t change its value after you set it.

**Examples:**

```javascript
var age = 20; // can change and re-declare
let name = "Sam"; // can change, but not re-declare in the same block
const pi = 3.14; // cannot change
```

## Explain the scope of `let` and `var` variables in JavaScript. (Covered Question)

**Scope** means where you can use a variable in your code.

- **var:**

  - If you use var inside a function, you can use it anywhere in that function.
  - If you use var outside a function, it’s available everywhere (global).
  - var is “hoisted,” so you can use it before you write it, but its value will be undefined until you set it.

- **let:**
  - let only works inside the nearest curly braces `{}` (block), like inside an if statement or a loop.
  - let is also “hoisted,” but you can’t use it before you write it (it will give an error).

**Table: var vs let**

| Feature         | var (old)       | let (new)                           |
| --------------- | --------------- | ----------------------------------- |
| Scope           | Function/Global | Block                               |
| Can re-declare? | Yes             | No                                  |
| Can update?     | Yes             | Yes                                 |
| Hoisted?        | Yes (undefined) | Yes (error if used before declared) |

**Example:**

```javascript
if (true) {
  var x = 10;
  let y = 20;
}
console.log(x); // 10 (works)
console.log(y); // Error (not defined)
```

---

# Creating Functions in JavaScript

A function is a set of instructions you can use again and again. It helps you organize your code and avoid repeating yourself.

**How to make a function:**

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}
```

**How to use (call) a function:**

```javascript
greet("Sam"); // returns "Hello, Sam!"
```

**Other ways to write functions:**

- **Function Expression:**

  ```javascript
  const sayHi = function (name) {
    return "Hi, " + name;
  };
  ```

- **Arrow Function (shorter way):**

  ```javascript
  const add = (a, b) => a + b;
  ```

---

# Returning Data from Functions

A function can give back (return) a value using the `return` keyword. If you don’t use return, the function gives back `undefined`.

**Example:**

```javascript
function add(a, b) {
  return a + b;
}
let sum = add(5, 3); // sum is 8
```

You can also return objects, arrays, or even other functions.

---

# UI Events in JavaScript

UI (User Interface) events are things that happen on a web page, like clicking a button, typing in a box, or moving the mouse. JavaScript can “listen” for these events and do something when they happen.

**Common UI Events:**

- `onclick`: When you click something
- `onchange`: When a value changes (like in a text box)
- `onmouseover`: When your mouse goes over something
- `onkeydown`: When you press a key

**How to use an event:**

```html
<button onclick="sayHello()">Click Me</button>
<script>
  function sayHello() {
    alert("Hello!");
  }
</script>
```

**Better way (using addEventListener):**

```html
<button id="myBtn">Click Me</button>
<script>
  document.getElementById("myBtn").addEventListener("click", function () {
    alert("Button clicked!");
  });
</script>
```

**What is the Event Object?**
When an event happens, JavaScript gives you an object with details about the event (like what was clicked, which key was pressed, etc.).

**Example:**

```html
<input type="text" id="myInput" />
<script>
  document
    .getElementById("myInput")
    .addEventListener("change", function (event) {
      alert("You typed: " + event.target.value);
    });
</script>
```

**Diagram: Event Bubbling**
If you click a button inside a box, the event happens on the button first, then the box, then the page. This is called “bubbling.”

```
  Page
    ^
   Box
    ^
 Button (clicked here)
```

You can stop this bubbling with `event.stopPropagation()`.

---

# JavaScript: Conditions, Loops, Objects, and DOM (with Key Questions Answered)

---

## Working with Conditions in JavaScript

Conditions let your code make decisions based on whether something is true or false.
The most common way to do this is with `if`, `else if`, and `else` statements.

- **`if` statement:** This runs a block of code only if a specific condition is true.
  Think of it as: "If this is true, then do this."

- **`else if` statement:** If the first `if` condition is false, JavaScript checks the `else if` condition.
  You can have multiple `else if` blocks to check for several different conditions.
  Think of it as: "Otherwise, if this other thing is true, then do this instead."

- **`else` statement:** If all the `if` and `else if` conditions are false, the code inside the `else` block will run.
  This is like a fallback: "If none of the above were true, then do this."

**Syntax:**

```javascript
if (condition) {
  // code runs if condition is true
}
else if (anotherCondition) {
  // code runs if anotherCondition is true
}
else {
  // code runs if none above are true
}
```

**Example:**

```javascript
let age = 18;
if (age >= 18) {
  console.log("Adult");
}
else {
  console.log("Not an adult");
}
```

### Switch Case (Q14: What do you mean by Switch Case? Explain the various control statements in JavaScript.)

The `switch` statement is used to perform different actions based on different conditions. It checks the value of an expression against multiple possible cases and runs the code for the first matching case.

**Syntax:**

```javascript
switch (expression) {
  case value1:
    // code to run if expression === value1
    break;
  case value2:
    // code to run if expression === value2
    break;
  default:
  // code to run if no cases match
}
```

**Example:**

```javascript
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}
```

**Other Control Statements in JavaScript:**

- `break`: Exits a loop or a switch statement immediately.
- `continue`: Skips the rest of the current loop iteration and moves to the next one.
- `return`: Exits a function and optionally returns a value.

**Example of break and continue:**

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break; // stop loop at 5
  console.log(i);
}
// Output: 1, 2, 4
```

---

## Looping in JavaScript

Looping means repeating a set of instructions multiple times. JavaScript provides several ways to loop through code, which helps you handle tasks like processing lists, repeating actions, or checking conditions until something changes.

### Types of Loops

- **for loop:** Runs code a specific number of times.
- **while loop:** Runs code as long as a condition is true.
- **do...while loop:** Like while, but runs the code at least once before checking the condition.
- **for...of loop:** Used to loop through the values of an array or other iterable objects.
- **for...in loop:** Used to loop through the keys (properties) of an object.

### Definitions and Examples

- **for loop:**  
   Used when you know how many times you want to repeat something.

  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i); // prints 0 to 4
  }
  ```

- **while loop:**  
   Used when you want to repeat something until a condition is false.

  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

- **do...while loop:**  
   Similar to while, but always runs at least once.

  ```javascript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

- **for...of loop:**  
   Used for arrays and other iterable objects.

  ```javascript
  let arr = [1, 2, 3];
  for (let num of arr) {
    console.log(num);
  }
  ```

- **for...in loop:**  
   Used for objects to loop through property names.
  ```javascript
  let obj = { a: 1, b: 2 };
  for (let key in obj) {
    console.log(key, obj[key]);
  }
  ```

### Key Points

- Loops help avoid repeating code.
- Use `break` to exit a loop early.
- Use `continue` to skip to the next loop iteration.

### Table: JavaScript Loops Overview

| Loop Type  | Use Case                         | Syntax Example                   | Runs At Least Once? |
| ---------- | -------------------------------- | -------------------------------- | ------------------- |
| for        | Known number of repetitions      | `for (let i = 0; i < n; i++) {}` | No                  |
| while      | Unknown repetitions, condition   | `while (condition) {}`           | No                  |
| do...while | Like while, but run once minimum | `do { } while (condition);`      | Yes                 |
| for...of   | Loop through array values        | `for (let item of array) {}`     | No                  |
| for...in   | Loop through object properties   | `for (let key in object) {}`     | No                  |

**Example: Print reverse digits of a number (Q13)**

You can use a loop to reverse the digits of a number:

```javascript
function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(reverseNumber(12345)); // 54321
```

```javascript
function reverseNumber(num) {
return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNumber(12345)); // 54321
```

---

## Block Scope Variables

Block scope means a variable only exists inside the nearest `{}` (block). Use `let` and `const` for block scope.

**Example:**

```javascript
if (true) {
  let x = 10;
  const y = 20;
  // x and y only exist here
}
// x and y are not available here
```

---

## Working with Objects in JavaScript (Q3, Q12)

Objects are special variables that can hold many values as properties and functions as methods.

**Definition:**
- **Object:** A collection of key-value pairs. Each key (property name) has a value, which can be data or a function.

### Creating an Object using Object Literals (Q3, Q12)

You can create an object easily using curly braces `{}`. This is called an object literal.

```javascript
let person = {
    name: "Alice",
    age: 25,
    greet: function () {
        console.log("Hello, " + this.name);
    },
};
person.greet(); // Hello, Alice
```

- `name` and `age` are properties (data).
- `greet` is a method (function inside the object).
- `this` refers to the current object.

### Q3: Write a Script to Generate Random Numbers

You can use the built-in `Math.random()` function to generate random numbers.

```javascript
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100)); // random number between 1 and 100
```

- `Math.random()` gives a random number between 0 and 1.
- Multiply and adjust to get a number in your desired range.

### Q12: ‘JavaScript is referred to as object-based programming language’

**Definition:**  
JavaScript is called an object-based programming language because it uses objects to store and manage data. Almost everything in JavaScript can be treated as an object, except for a few basic data types (like numbers and strings).

#### What is an Object?
- An object is a collection of properties(determined by state and behaviour).
- Each property has a name (key) and a value.
- Properties can be data (like numbers or text) or functions (called methods).

#### Why is JavaScript Object-Based?
- JavaScript uses objects to group related data and actions together.
- Arrays, functions, and dates are all special types of objects.
- You can create your own objects to organize your code.

#### Key Points about Objects in JavaScript:
- **Easy to Organize:** Objects help keep related information and actions together.
- **Flexible:** You can add, change, or remove properties and methods from objects at any time.
- **Reusable:** Objects make it easy to reuse code by creating templates (using constructors or classes).
- **Built-in Objects:** JavaScript provides many built-in objects like `Array`, `Date`, `Math`, and `String`.

#### Example: Creating and Using an Object
```javascript
let car = {
    brand: "Toyota",
    model: "Corolla",
    start: function() {
        console.log("Car started");
    }
};

console.log(car.brand); // Toyota
car.start(); // Car started
```

#### Difference from Object-Oriented Programming (OOP)
- JavaScript is object-based, not fully object-oriented.
- It supports objects and methods, but does not require everything to be inside a class.
- JavaScript uses prototypes instead of strict classes (though ES6 introduced class syntax).

---

## Manipulating DOM Elements with JavaScript (Q7, Q11, Q15)

### What is the DOM? (Definition)

- **DOM** stands for **Document Object Model**.
- It is a tree-like structure that represents all the elements of a web page (like headings, paragraphs, buttons, etc.) as objects.
- JavaScript can use the DOM to read, change, add, or remove elements and content on a web page.

### Key Points about the DOM

- The DOM lets you interact with and update the web page without reloading it.
- Every HTML tag becomes a node (object) in the DOM tree.
- You can use JavaScript to select, create, modify, or delete these nodes.

### How to Create and Add Elements to the DOM

You can use JavaScript to create new elements (like a text box or button) and add them to the page.

#### Example: Creating a Text Box and Button

```javascript
// Create a text box (input element)
let input = document.createElement("input");
input.type = "text"; // set type to text
document.body.appendChild(input); // add to the page

// Create a button
let button = document.createElement("button");
button.innerHTML = "Submit"; // set button text
document.body.appendChild(button); // add to the page
```

- `document.createElement("tagName")`: Makes a new HTML element.
- `element.type`: Sets the type (for input elements).
- `element.innerHTML`: Sets the content inside the element (for buttons, etc.).
- `document.body.appendChild(element)`: Adds the new element to the web page.

#### Example: Adding an Event to the Button

You can make the button do something when clicked:

```javascript
button.addEventListener("click", function() {
    alert("Button clicked! Value: " + input.value);
});
```

### Table: Common DOM Methods

| Method                          | What it Does                                 |
|----------------------------------|----------------------------------------------|
| `getElementById("id")`           | Selects an element by its ID                 |
| `getElementsByClassName("class")`| Selects elements by class name               |
| `getElementsByTagName("tag")`    | Selects elements by tag name                 |
| `querySelector("selector")`      | Selects the first element matching selector  |
| `createElement("tag")`           | Creates a new HTML element                   |
| `appendChild(element)`           | Adds an element as a child                   |
| `removeChild(element)`           | Removes a child element                      |
| `setAttribute("name", "value")`  | Sets an attribute on an element              |

---

### Q15: Difference Between DOM and COM

| Feature         | DOM (Document Object Model)           | COM (Component Object Model)         |
|-----------------|---------------------------------------|--------------------------------------|
| What is it?     | Structure for web pages (HTML/XML)    | Microsoft tech for software components|
| Used for        | Web development (browsers)            | Windows applications (not web pages) |
| Language        | JavaScript, HTML, XML                 | C++, VB, and other Windows languages |
| Purpose         | Manipulate web page content and layout | Enable software components to interact|

**Summary:**  
- **DOM** is for web pages, lets you change the page with JavaScript.
- **COM** is for building reusable software parts in Windows, not related to web pages.

---

**In simple terms:**  
- The DOM lets you use JavaScript to change what you see on a web page.
- You can create, update, or remove elements like text boxes and buttons.
- DOM is for web; COM is for Windows software components.


---

## Form Objects and Data Validation (Q6, Q8)

**Form objects:**

- `document.forms`: All forms on the page.
- `form.elements`: All elements in a form.
- `form.submit()`: Submits the form.
- `form.reset()`: Resets the form.

**Q6: Data validation example:**

```javascript
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
```

**Q8: Difference between JavaScript and JScript? How to do client-side validation?**

- JavaScript: Standard scripting language for web.
- JScript: Microsoft’s version of JavaScript.
- Client-side validation: Use JavaScript to check form data before sending to server (see example above).

---

## Client-Side vs Server-Side Scripting (Q5, Q10, Q17)

**Q5 & Q10: Compare CGI and JavaScript. Differentiate between Client-Side and Server-Side Scripting.**

- **Client-Side Scripting:** Runs in the browser (JavaScript). Used for UI, validation, interactivity.
- **Server-Side Scripting:** Runs on the server (PHP, Node.js, CGI). Used for database, file operations.
- **CGI:** Common Gateway Interface, a way for web servers to run external programs (server-side).
- **JavaScript:** Usually client-side, but can be server-side with Node.js.

**Q17: Define API and CGI.**

- **API:** Application Programming Interface, a set of rules for software to communicate.
- **CGI:** Common Gateway Interface, lets web servers run external programs.

---

## Alert and Confirm Box (Q16)

**Q16: Code for Alert and Confirm Box:**

```javascript
// Alert box
alert("This is an alert box!");
// Confirm box
let result = confirm("Do you want to proceed?");
console.log(result); // true if OK, false if Cancel
```

---

## COM vs DCOM (Q4)

**Q4: Is COM same as DCOM?**

- **COM:** Component Object Model, for local software components (Windows).
- **DCOM:** Distributed COM, for components over a network.

---

This covers the topics in simple English with examples, tables, and diagrams. If you need more details or examples, just ask!
