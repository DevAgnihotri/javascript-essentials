# JavaScript DOM (Document Object Model)

## 📖 Introduction

The **DOM (Document Object Model)** is a programming interface provided by the browser. It represents the **HTML document** as a **tree-like structure**, where each element (tag, text, comment, etc.) is an **object** that can be accessed and manipulated using JavaScript.

---

## 🧠 Definition

> The **DOM** is a **hierarchical representation** of an HTML or XML document that allows developers to programmatically access and change the document’s content, structure, and style.

---

## 🧩 DOM Structure

HTML is converted into a **tree structure**:

```

<html>
  <head>
    <title>Page</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

Becomes:

```
Document
 └── html
     ├── head
     │    └── title
     └── body
          └── h1
```

Each tag is a **node**. Nodes are of various types:

- **Element nodes** – `<div>`, `<p>`, `<a>`, etc.
- **Text nodes** – actual text inside elements
- **Comment nodes** – HTML comments `<!-- -->`
- **Document node** – represents the entire HTML document

---

## 📌 Accessing the DOM

JavaScript accesses the DOM using the global `document` object.

```javascript
console.log(document.title); // Outputs the page title
```

---

## 🔍 DOM Selectors

### 🔹 Single Element Selectors

| Method                      | Description                         |
| --------------------------- | ----------------------------------- |
| `document.getElementById()` | Selects by ID                       |
| `document.querySelector()`  | Selects the first match (CSS-style) |

```javascript
let header = document.getElementById("main-heading");
let btn = document.querySelector(".btn");
```

### 🔹 Multiple Element Selectors

| Method                              | Description                              |
| ----------------------------------- | ---------------------------------------- |
| `document.getElementsByClassName()` | Returns HTMLCollection by class name     |
| `document.getElementsByTagName()`   | Returns HTMLCollection by tag            |
| `document.querySelectorAll()`       | Returns NodeList of all matched elements |

```javascript
let items = document.querySelectorAll("li");
```

---

## 🛠️ Manipulating DOM Elements

### 🔹 Content

| Property/Method | Description                              |
| --------------- | ---------------------------------------- |
| `textContent`   | Gets/sets plain text                     |
| `innerHTML`     | Gets/sets HTML inside the element        |
| `innerText`     | Like `textContent`, but respects styling |

```javascript
element.textContent = "Hello World!";
```

### 🔹 Attributes

| Method                    | Description                  |
| ------------------------- | ---------------------------- |
| `getAttribute(attr)`      | Gets an attribute value      |
| `setAttribute(attr, val)` | Sets or updates an attribute |
| `removeAttribute(attr)`   | Removes an attribute         |

```javascript
img.setAttribute("src", "image.jpg");
```

### 🔹 Classes

| Method                 | Description            |
| ---------------------- | ---------------------- |
| `classList.add()`      | Adds a class           |
| `classList.remove()`   | Removes a class        |
| `classList.toggle()`   | Toggles a class        |
| `classList.contains()` | Checks if class exists |

---

## 🎨 Styling DOM Elements

```javascript
element.style.color = "blue";
element.style.fontSize = "20px";
```

Note: Inline styles override CSS files, so use sparingly.

---

## 📂 DOM Tree Traversal

| Property/Method          | Description                           |
| ------------------------ | ------------------------------------- |
| `parentElement`          | Gets parent node                      |
| `children`               | Returns HTMLCollection of child nodes |
| `firstElementChild`      | Gets first child                      |
| `lastElementChild`       | Gets last child                       |
| `nextElementSibling`     | Next element on the same level        |
| `previousElementSibling` | Previous element on same level        |

---

## 🧱 Creating & Removing Elements

### 🔹 Creating Elements

```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "New Box";
```

### 🔹 Appending to DOM

```javascript
document.body.appendChild(newDiv);
```

Or insert inside another element:

```javascript
container.appendChild(newDiv);
```

### 🔹 Removing Elements

```javascript
element.remove();
```

Or

```javascript
parent.removeChild(child);
```

---

## 🖱️ Event Handling in DOM

JavaScript can react to user interactions using **event listeners**.

```javascript
element.addEventListener("click", function () {
  alert("Clicked!");
});
```

Common DOM Events:

| Event Type  | Trigger               |
| ----------- | --------------------- |
| `click`     | Mouse click           |
| `mouseover` | Mouse enters element  |
| `mouseout`  | Mouse leaves element  |
| `keydown`   | Keyboard key pressed  |
| `submit`    | Form is submitted     |
| `load`      | Page finishes loading |
| `change`    | Input changes         |

---

## 🧪 Real-World Example: Interactive Todo List

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Todo App</title>
  </head>
  <body>
    <h1 id="title">My Todos</h1>
    <ul id="todo-list">
      <li>Learn JavaScript</li>
    </ul>
    <input id="todo-input" type="text" placeholder="New task..." />
    <button id="add-btn">Add</button>

    <script>
      // Selecting elements
      const list = document.getElementById("todo-list");
      const input = document.getElementById("todo-input");
      const btn = document.getElementById("add-btn");

      // Event Listener on button
      btn.addEventListener("click", function () {
        let task = input.value.trim();
        if (task !== "") {
          let li = document.createElement("li");
          li.textContent = task;
          list.appendChild(li);
          input.value = "";
        }
      });
    </script>
  </body>
</html>
```

---

### 🧾 Explanation

- `getElementById(...)`: Selects existing DOM elements.
- `addEventListener("click", ...)`: Runs function on button click.
- `createElement("li")`: Creates new list item.
- `textContent = task`: Assigns text to new item.
- `appendChild(li)`: Adds item to list.
- `input.value = ""`: Clears the input field after submission.

---

## 📚 Summary Table

| Feature                    | Purpose                                 |
| -------------------------- | --------------------------------------- |
| `document`                 | Entry point for DOM                     |
| Selectors                  | Locate elements (`getElementById`, etc) |
| `innerHTML`, `textContent` | Read/write content                      |
| Attributes                 | Access HTML attributes                  |
| Styling                    | Modify inline CSS                       |
| Events                     | Add interactivity                       |
| Create/Remove              | Dynamic HTML creation                   |
| Traversal                  | Move within the DOM tree                |

---

## 💡 Best Practices

- Prefer `querySelector()` / `querySelectorAll()` for flexibility.
- Cache DOM queries to improve performance.
- Avoid excessive inline styling; use CSS classes.
- Always validate user input before processing.
- Remove unused event listeners to optimize memory.

---

## 📦 Related APIs

- `localStorage` / `sessionStorage` – Persist data
- `MutationObserver` – Detect DOM changes
- `requestAnimationFrame()` – Efficient animations
