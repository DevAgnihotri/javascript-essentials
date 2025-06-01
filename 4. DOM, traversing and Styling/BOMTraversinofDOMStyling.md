1. **BOM (Browser Object Model)**
2. **Traversing the DOM**
3. **Styling the DOM**

# 🧭 Browser Object Model (BOM)

## 📖 Definition

The **Browser Object Model (BOM)** provides interaction with the **browser itself**, outside the content of the webpage. Unlike the DOM, which deals with page structure, the BOM allows control over **browser features** like windows, tabs, URLs, and the history stack.

---

## 🔧 Key BOM Objects

| Object                               | Description                                   |
| ------------------------------------ | --------------------------------------------- |
| `window`                             | Global object representing the browser window |
| `navigator`                          | Provides browser and OS info                  |
| `location`                           | Represents current URL; allows redirection    |
| `history`                            | Allows manipulation of the session history    |
| `screen`                             | Provides screen dimensions                    |
| `alert()` / `prompt()` / `confirm()` | Display browser dialog boxes                  |

---

## 🧱 Common BOM Methods and Properties

### 🔹 Window Object

```javascript
alert("Hello!"); // Shows an alert box
confirm("Are you sure?"); // Shows a confirm box
prompt("Your name?"); // Input dialog
console.log(window.innerWidth); // Width of the viewport
```

### 🔹 Location Object

```javascript
console.log(location.href); // Full URL
location.reload(); // Reload the page
location.assign("https://..."); // Redirect to new URL
```

### 🔹 Navigator Object

```javascript
console.log(navigator.userAgent); // Browser user agent
console.log(navigator.language); // Language of the browser
```

### 🔹 History Object

```javascript
history.back(); // Go back one page
history.forward(); // Go forward one page
history.go(-2); // Go back two pages
```

---

# 🧭 DOM Traversal

## 📖 Definition

DOM Traversal refers to navigating between nodes (elements, text, etc.) in the document tree using JavaScript. It allows one to move **up**, **down**, or **sideways** in the tree structure.

---

## 🔁 Traversal Properties

| Property                 | Description                          |
| ------------------------ | ------------------------------------ |
| `parentElement`          | Selects the parent node              |
| `children`               | HTMLCollection of all child elements |
| `firstElementChild`      | First child element                  |
| `lastElementChild`       | Last child element                   |
| `nextElementSibling`     | Next element at the same level       |
| `previousElementSibling` | Previous element at the same level   |

---

## 🔍 Example

```javascript
const list = document.getElementById("todo-list");

console.log(list.parentElement); // Logs parent of UL
console.log(list.children); // HTMLCollection of <li>
console.log(list.firstElementChild); // First <li>
console.log(list.lastElementChild); // Last <li>
console.log(list.nextElementSibling); // Next sibling element
```

> HTMLCollection and NodeList look like arrays but aren't full arrays. To loop them:

```javascript
Array.from(list.children).forEach((li) => {
  console.log(li.textContent);
});
```

---

# 🎨 Styling DOM Elements

## 📖 Overview

DOM elements can be styled directly using JavaScript by accessing their `style` property or manipulating their CSS classes.

---

## 🔧 Inline Styling

```javascript
const box = document.getElementById("box");
box.style.color = "red";
box.style.fontSize = "24px";
box.style.backgroundColor = "#f0f0f0";
```

> Properties use camelCase notation: `background-color` → `backgroundColor`.

---

## 🎯 Class Manipulation

| Method                 | Description                    |
| ---------------------- | ------------------------------ |
| `classList.add()`      | Adds one or more classes       |
| `classList.remove()`   | Removes one or more classes    |
| `classList.toggle()`   | Adds/removes based on presence |
| `classList.contains()` | Checks if class exists         |

### Example:

```javascript
let card = document.querySelector(".card");

card.classList.add("highlight"); // Adds class
card.classList.toggle("hidden"); // Toggles class
if (card.classList.contains("dark")) {
  card.classList.remove("dark"); // Removes if present
}
```

---

## 💡 Best Practices for Styling

- Use **CSS classes** for maintainability over direct `style`.
- Keep **CSS and JS responsibilities separated** when possible.
- Use `classList` for cleaner, reusable styling logic.
- Avoid setting multiple inline styles unless necessary.
