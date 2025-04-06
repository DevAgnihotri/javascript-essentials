# Introduction to JavaScript and Its Variables

JavaScript (JS) is a high-level, interpreted programming language primarily used to make web pages interactive. It can be used for both frontend (in the browser) and backend (using environments like Node.js) development.

---

## JavaScript Variables

Variables are used to store data that can be referenced and manipulated later in a program.

### Ways to Declare Variables in JavaScript

JavaScript provides three main ways to declare variables:

### 1. `var`

- **Introduced** in early versions of JavaScript
- **Scope**: Function-scoped
- **Can be redeclared and updated**
- **Hoisted** (moved to the top of their scope and initialized with `undefined`)

#### Example:

```javascript
var x = 10;
if (true) {
  var x = 20;
  console.log(x); // 20
}
console.log(x); // 20 (same variable, function scoped)
```

### 2. `let`

- **Introduced in ES6 (2015)**
- **Scope**: Block-scoped
- **Can be updated but not redeclared in the same scope**
- **Hoisted**, but not initialized (accessing before declaration gives error)

#### Example:

```javascript
let y = 10;
if (true) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // 10 (different variable due to block scope)
```

### 3. `const`

- **Introduced in ES6 (2015)**
- **Scope**: Block-scoped
- **Cannot be updated or redeclared** (must be initialized at the time of declaration)
- **Hoisted**, but not initialized

#### Example:

```javascript
const z = 30;
z = 40; // Error: Assignment to constant variable
```

> Note: If a `const` variable is an object or array, its contents **can** be changed.

```javascript
const arr = [1, 2, 3];
arr.push(4); // This is allowed
console.log(arr); // [1, 2, 3, 4]
```

---

## Variable Scope in JavaScript

**Scope** refers to the context in which variables are declared and accessed.

### 1. Global Scope

- Declared outside any function or block
- Accessible from anywhere in the code

```javascript
var a = 100;
function showA() {
  console.log(a); // 100
}
showA();
```

### 2. Function Scope

- Variables declared inside a function using `var` are accessible only within that function

```javascript
function myFunc() {
  var b = 200;
  console.log(b); // 200
}
console.log(b); // Error: b is not defined
```

### 3. Block Scope

- Variables declared using `let` or `const` inside a `{}` block

```javascript
if (true) {
  let c = 300;
  const d = 400;
  console.log(c, d); // 300 400
}
console.log(c); // Error: c is not defined
```

---

## Hoisting

**Hoisting** means variable and function declarations are moved to the top of their scope before code execution.

- `var` is hoisted and initialized with `undefined`
- `let` and `const` are hoisted but not initialized (they remain in a **Temporal Dead Zone** until declared)

#### Example:

```javascript
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
```

---

## Summary

| Keyword | Scope    | Redeclarable | Updatable | Hoisted | Initialized on Hoist |
| ------- | -------- | ------------ | --------- | ------- | -------------------- |
| var     | Function | Yes          | Yes       | Yes     | Yes (`undefined`)    |
| let     | Block    | No           | Yes       | Yes     | No                   |
| const   | Block    | No           | No        | Yes     | No                   |

---
