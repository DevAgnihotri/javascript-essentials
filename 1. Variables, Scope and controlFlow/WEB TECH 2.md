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

This covers the topics in simple English with examples, tables, and diagrams. If you need more details or examples, just ask!
