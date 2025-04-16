# JavaScript Event Listeners

## 📖 What is an Event Listener?

An **Event Listener** in JavaScript is a function that waits for something to happen (an event), like when a user clicks a button, moves the mouse, presses a key, etc.

JavaScript can "listen" to these actions and respond to them. This is how webpages become interactive!

---

## 🧠 Definition

An **Event Listener** is a method that attaches a function to an HTML element so that it runs when a specific event occurs.

---

## 🧩 Key Concepts

- **Event**: An action that happens on a webpage (click, mouseover, keypress, etc.)
- **Listener**: A function that waits for that event to happen and then responds.
- **Callback Function**: The function that gets called when the event happens.

---

## 🔧 Syntax

```javascript
element.addEventListener("event", functionName);
```

````

### 🔹 Parameters:

- `element`: The HTML element you want to watch.
- `"event"`: The name of the event as a string (like `"click"`, `"mouseover"`, `"keydown"`).
- `functionName`: The function to run when the event happens.

You can also use an **anonymous function** directly:

```javascript
element.addEventListener("click", function () {
  // do something
});
```

---

## ✅ Why Use Event Listeners?

- Makes web pages **interactive**
- Keeps **JavaScript and HTML separate** (better practice)
- You can add **multiple listeners** to the same element
- You can remove listeners when no longer needed

---

## 📌 Common Event Types

| Event Type  | Description                        |
| ----------- | ---------------------------------- |
| `click`     | When an element is clicked         |
| `mouseover` | When the mouse is over the element |
| `mouseout`  | When the mouse leaves the element  |
| `keydown`   | When a keyboard key is pressed     |
| `keyup`     | When a key is released             |
| `submit`    | When a form is submitted           |
| `load`      | When the page finishes loading     |

---

## 🛠️ Example Program

To create a simple web page that changes the background color when a button is clicked.

### 📄 HTML + JavaScript

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Listener Example</title>
  </head>
  <body>
    <h1>Change Background Color</h1>
    <button id="colorBtn">Click Me!</button>

    <script>
      // Step 1: Select the button using its ID
      let button = document.getElementById("colorBtn");

      // Step 2: Define the function to change the background color
      function changeColor() {
        document.body.style.backgroundColor = "lightblue";
      }

      // Step 3: Add an event listener to the button
      button.addEventListener("click", changeColor);
    </script>
  </body>
</html>
```

---

### 🧾 What Each Line Does

- `<button id="colorBtn">` – A button the user can click.
- `<script>` – JavaScript code goes here.
- `document.getElementById("colorBtn")` – Finds the button with ID "colorBtn".
- `function changeColor()` – A function that changes the page background.
- `document.body.style.backgroundColor = "lightblue";` – Sets background to light blue.
- `button.addEventListener("click", changeColor);` – Listens for clicks and runs `changeColor()`.

---

## 🚀 Extra Tips

- We can add **multiple** event listeners to one element.
- We can **remove** an event listener with `removeEventListener`.

````
