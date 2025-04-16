# JavaScript Strings

## 📖 Introduction

In JavaScript, a **String** is a sequence of characters used to represent text. Strings are one of the **primitive data types** and are widely used to store and manipulate textual data.

---

## 🧠 Definition

A **String** in JavaScript is a set of characters enclosed in **single quotes**, **double quotes**, or **backticks** (template literals).

```javascript
let str1 = "Hello";
let str2 = "World";
let str3 = `Hello World`;
```

---

## 🔠 Characteristics of Strings

- Strings are **immutable** – once created, they cannot be changed.
- Strings are **zero-indexed** – each character has a position starting from `0`.
- Strings can contain **letters, digits, symbols, whitespace**, and even **Unicode** characters.

---

## 🔧 Declaring Strings

```javascript
let singleQuote = "Hello";
let doubleQuote = "World";
let backtick = `Hello World`;
```

Backticks allow for **template literals** and **multi-line strings**.

---

## 🧩 Template Literals

Introduced in ES6, **template literals** support:

- Multi-line strings
- String interpolation (embedding variables)

```javascript
let name = "Dev";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Dev!
```

---

## ✍️ Common Escape Characters

| Escape Sequence | Description     |
| --------------- | --------------- |
| `\'`            | Single quote    |
| `\"`            | Double quote    |
| `\\`            | Backslash       |
| `\n`            | New line        |
| `\r`            | Carriage return |
| `\t`            | Tab             |
| `\b`            | Backspace       |

Example:

```javascript
console.log("Line1\nLine2");
```

---

## 📌 Accessing String Characters

```javascript
let str = "Hello";
console.log(str[0]); // H
console.log(str.charAt(1)); // e
```

---

## 🔁 Looping Through a String

```javascript
let word = "Code";
for (let char of word) {
  console.log(char);
}
```

---

## 🧪 String Properties

- `length`: Returns the number of characters in the string.

```javascript
let s = "JavaScript";
console.log(s.length); // 10
```

---

## 🔍 Common String Methods

### 🔹 Non-Mutating (Return New Values)

| Method                            | Description                                   |
| --------------------------------- | --------------------------------------------- |
| `charAt(index)`                   | Returns character at a specific index         |
| `charCodeAt(index)`               | Returns Unicode of character                  |
| `slice(start, end)`               | Extracts part of a string                     |
| `substring(start, end)`           | Similar to slice, but no negative indexes     |
| `substr(start, length)`           | Extracts part of a string (deprecated in ES6) |
| `toLowerCase()`                   | Converts to lowercase                         |
| `toUpperCase()`                   | Converts to uppercase                         |
| `trim()`                          | Removes whitespace from both ends             |
| `padStart(n, str)`                | Pads the beginning                            |
| `padEnd(n, str)`                  | Pads the end                                  |
| `includes(str)`                   | Checks if substring exists                    |
| `startsWith(str)`                 | Checks if string starts with given text       |
| `endsWith(str)`                   | Checks if string ends with given text         |
| `repeat(n)`                       | Repeats the string `n` times                  |
| `split(separator)`                | Splits string into an array                   |
| `replace(search, replacement)`    | Replaces substring                            |
| `replaceAll(search, replacement)` | Replaces all substrings                       |
| `indexOf(str)`                    | Returns index of first match                  |
| `lastIndexOf(str)`                | Returns index of last match                   |
| `match(regex)`                    | Matches string against a regex                |
| `matchAll(regex)`                 | Returns all regex matches                     |
| `search(regex)`                   | Searches using a regex                        |

---

## 🚫 Strings Are Immutable

Although methods can return new strings, the **original string remains unchanged**.

```javascript
let text = "Hello";
text.toUpperCase(); // Returns "HELLO"
console.log(text); // Still "Hello"
```

---

## 🔃 String Comparison

Strings can be compared using relational operators:

```javascript
console.log("apple" < "banana"); // true
```

Comparisons are **case-sensitive** and based on **Unicode values**.

---

## 🔍 Checking Type

```javascript
typeof "Hello"; // "string"
```

---

## 🔐 String to Number Conversion

```javascript
let numStr = "123";
let num = Number(numStr); // Converts to 123
```

---

## 🧪 Real-World Example: Formatted String Display

```javascript
class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  getProfile() {
    return `User Info:
    Name: ${this.name}
    Age: ${this.age}
    City: ${this.city}
    `;
  }

  shoutName() {
    return this.name.toUpperCase();
  }
}

let user1 = new User("Aarav", 22, "Lucknow");
console.log(user1.getProfile());
console.log("Name in Caps:", user1.shoutName());
```

---

### 🧾 Explanation Line-by-Line

- `class User { ... }` – Declares a class `User`.
- `constructor(name, age, city)` – Initializes user properties.
- `getProfile()` – Uses a **template literal** to return a formatted string.
- `shoutName()` – Uses `toUpperCase()` to convert the name to uppercase.
- `user1` – An instance of the `User` class.
- `console.log(...)` – Displays string outputs using class methods.

---

## 📝 Summary

| Concept           | Description                                 |
| ----------------- | ------------------------------------------- |
| String Definition | Text enclosed in '', "", or ``              |
| Immutable         | Cannot be changed once created              |
| Access Characters | Via index or `charAt()`                     |
| Template Literals | Multi-line and interpolated strings         |
| Escape Characters | Use `\` to insert special characters        |
| Useful Methods    | Over 30+ methods for transformation, search |
| Comparisons       | Case-sensitive Unicode-based comparisons    |
