# JavaScript Arrays

## 📖 Introduction

In JavaScript, an **Array** is a special variable that can hold more than one value at a time. Arrays are one of the most commonly used data structures and are used to store **ordered collections of elements**.

---

## 🧠 Definition

An **Array** is an **ordered list** of values, where each value is called an **element**, and each element has a numeric position called an **index**, starting from 0.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

In the above example, `fruits` is an array containing 3 string elements.

---

## 📦 Characteristics of Arrays

- Arrays can store elements of any data type: strings, numbers, objects, other arrays, etc.
- JavaScript arrays are **dynamic** – they can grow or shrink.
- JavaScript arrays are **zero-indexed**.
- Arrays are **mutable** – their contents can be changed.

---

## 🔧 Syntax

```javascript
let arrayName = [item1, item2, item3, ...];
```

Or using the constructor:

```javascript
let arrayName = new Array(item1, item2, item3);
```

---

## 🧾 Types of Array Elements

Arrays can contain:

- Numbers: `[1, 2, 3]`
- Strings: `["a", "b", "c"]`
- Mixed Types: `[1, "a", true]`
- Objects: `[ {name: "Dev"}, {name: "John"} ]`
- Functions: `[function() {}, () => {}]`
- Nested Arrays: `[1, [2, 3], 4]`

---

## 📌 Accessing Array Elements

```javascript
let arr = ["a", "b", "c"];
console.log(arr[0]); // "a"
```

Use the index to access elements. Indexing starts from 0.

---

## ✏️ Updating Array Elements

```javascript
arr[1] = "z"; // Changes "b" to "z"
```

---

## ➕ Adding Elements

### To the End:

```javascript
arr.push("newItem");
```

### To the Beginning:

```javascript
arr.unshift("newItem");
```

---

## ➖ Removing Elements

### From the End:

```javascript
arr.pop(); // Removes last item
```

### From the Beginning:

```javascript
arr.shift(); // Removes first item
```

---

## 🔁 Looping Through Arrays

### 1. `for` Loop

```javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### 2. `for...of` Loop

```javascript
for (let value of arr) {
  console.log(value);
}
```

### 3. `forEach()` Method

```javascript
arr.forEach(function (item, index) {
  console.log(index + ": " + item);
});
```

---

## 🛠️ Common Array Methods

### 🔹 Mutating Methods (Change the original array)

| Method      | Description                                         |
| ----------- | --------------------------------------------------- |
| `push()`    | Adds item(s) to the end                             |
| `pop()`     | Removes the last item                               |
| `shift()`   | Removes the first item                              |
| `unshift()` | Adds item(s) to the beginning                       |
| `splice()`  | Adds/removes items at a specific index              |
| `reverse()` | Reverses the array                                  |
| `sort()`    | Sorts the array alphabetically (or by custom logic) |

### 🔸 Non-Mutating Methods (Return a new array or value)

| Method       | Description                                            |
| ------------ | ------------------------------------------------------ |
| `concat()`   | Joins two or more arrays                               |
| `slice()`    | Returns selected elements as a new array               |
| `map()`      | Transforms elements and returns a new array            |
| `filter()`   | Filters elements based on condition                    |
| `reduce()`   | Reduces array to a single value                        |
| `find()`     | Finds the first element that matches a condition       |
| `includes()` | Checks if an element exists in the array               |
| `indexOf()`  | Returns the first index of an element                  |
| `join()`     | Converts array to string with separator                |
| `every()`    | Returns true if all elements match a condition         |
| `some()`     | Returns true if at least one element matches condition |
| `flat()`     | Flattens nested arrays into a single-level array       |

---

## 🔍 Checking Array Type

```javascript
Array.isArray(variable); // true if variable is an array
```

---

## 🧵 Array Destructuring

```javascript
let [first, second] = ["a", "b", "c"];
// first = "a", second = "b"
```

---

## 🧪 Example Program

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Array Example</title>
  </head>
  <body>
    <h1>JavaScript Array Demo</h1>
    <button onclick="showFruits()">Show Fruits</button>

    <script>
      // Step 1: Declare an array of fruits
      let fruits = ["Apple", "Banana", "Mango", "Orange"];

      // Step 2: Define a function to show all fruits
      function showFruits() {
        // Step 3: Loop through the array
        for (let i = 0; i < fruits.length; i++) {
          alert("Fruit " + (i + 1) + ": " + fruits[i]);
        }

        // Step 4: Add a new fruit
        fruits.push("Pineapple");

        // Step 5: Display the updated array in the console
        console.log("Updated Fruit List:", fruits);
      }
    </script>
  </body>
</html>
```

### 🧾 Explanation Line-by-Line

- `<button onclick="showFruits()">` – A button that runs the `showFruits()` function when clicked.
- `let fruits = [...]` – Declares an array with initial fruit names.
- `function showFruits()` – A function that will run when the button is clicked.
- `for` loop – Iterates through the `fruits` array.
- `alert(...)` – Shows each fruit name in an alert box.
- `fruits.push("Pineapple")` – Adds a new fruit to the array.
- `console.log(...)` – Outputs the updated array to the browser console.
