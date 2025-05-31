# React Basics - Getting Started Guide

## What is React?

React is a JavaScript library for building user interfaces. Think of it like building blocks - you create small pieces (components) and combine them to build a complete website.

## Basic Terms You Need to Know

### 1. Component

A component is like a custom HTML tag that you create. It's a piece of code that returns some HTML.

### 2. JSX

JSX looks like HTML but it's actually JavaScript. It lets you write HTML-like code inside JavaScript.

### 3. Props

Props are like function parameters - they let you pass data from one component to another.

### 4. State

State is data that can change. When state changes, React updates what you see on the screen.

---

## Setting Up React (Boilerplate Code)

### Creating a New React App

```bash
# Create a new React app
npx create-react-app my-app

# Go into the folder
cd my-app

# Start the development server
npm start
```

### Basic File Structure

```
my-app/
  src/
    App.js          // Main component
    index.js        // Entry point
    index.css       // Global styles
  public/
    index.html      // HTML template
  package.json      // Project settings
```

---

## Your First React Component

### Basic Component Structure

```jsx
// App.js
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
```

**Explanation:**

- `function App()` - Creates a component called App
- `return` - Returns JSX (HTML-like code)
- `export default App` - Makes this component available to other files

### The Entry Point (index.js)

```jsx
// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

**Explanation:**

- This file tells React to put your App component into the HTML page
- `document.getElementById('root')` finds the div with id="root" in index.html
- `<App />` is how you use your component

---

## Hello World Examples

### Simple Hello World

```jsx
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}
```

### Hello World with Variable

```jsx
function HelloWorld() {
  const message = "Hello, World!";
  return <h1>{message}</h1>;
}
```

### Hello World with User Name

```jsx
function HelloWorld() {
  const userName = "Alice";
  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <p>Welcome to React!</p>
    </div>
  );
}
```

**Key Points:**

- Use `{}` curly braces to put JavaScript inside JSX
- You can only return ONE main element (wrap multiple elements in a `<div>`)

---

## Simple Math Operations

### Adding Two Numbers

```jsx
function Calculator() {
  const number1 = 10;
  const number2 = 5;
  const result = number1 + number2;

  return (
    <div>
      <h2>Simple Calculator</h2>
      <p>
        {number1} + {number2} = {result}
      </p>
      <p>The answer is: {number1 + number2}</p>
    </div>
  );
}
```

### Math with User Input (Using State)

```jsx
import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
      <h2>Add Two Numbers</h2>
      <input
        type="number"
        placeholder="First number"
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Second number"
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <p>Result: {num1 + num2}</p>
    </div>
  );
}
```

**Explanation:**

- `useState(0)` creates state with initial value 0
- `onChange` runs when user types in the input
- `Number(e.target.value)` converts text to number

---

## Integrating Multiple Components

### Creating Small Components

```jsx
// Header component
function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="#home">Home</a> | <a href="#about">About</a>
      </nav>
    </header>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  );
}

// Content component
function Content() {
  return (
    <main>
      <h2>Welcome to my website!</h2>
      <p>This is the main content area.</p>
    </main>
  );
}
```

### Combining Components

```jsx
// Main App component that uses other components
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
```

### Passing Data Between Components (Props)

```jsx
// Greeting component that receives data
function Greeting({ name, age }) {
  return (
    <div>
      <h3>Hello, {name}!</h3>
      <p>You are {age} years old.</p>
    </div>
  );
}

// User card component
function UserCard({ name, age, email }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <Greeting name={name} age={age} />
      <p>Email: {email}</p>
    </div>
  );
}

// Main app using components with data
function App() {
  return (
    <div>
      <h1>User Directory</h1>
      <UserCard name="Alice" age={25} email="alice@email.com" />
      <UserCard name="Bob" age={30} email="bob@email.com" />
      <UserCard name="Charlie" age={35} email="charlie@email.com" />
    </div>
  );
}
```

**Explanation:**

- `Greeting` component receives `name` and `age` as props
- `UserCard` component uses `Greeting` and adds more information
- We pass data using attributes like `name="Alice"`

---

## Complete Example: Simple Counter App

```jsx
import { useState } from "react";

// Button component
function CounterButton({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ margin: "5px", padding: "10px" }}>
      {children}
    </button>
  );
}

// Display component
function CounterDisplay({ count }) {
  return (
    <div style={{ fontSize: "24px", margin: "20px" }}>
      Current Count: {count}
    </div>
  );
}

// Main Counter component
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Simple Counter</h2>
      <CounterDisplay count={count} />
      <div>
        <CounterButton onClick={decrement}>-</CounterButton>
        <CounterButton onClick={reset}>Reset</CounterButton>
        <CounterButton onClick={increment}>+</CounterButton>
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Counter />
    </div>
  );
}

export default App;
```

**What this example shows:**

- How to break down a feature into smaller components
- How to pass functions as props (`onClick`)
- How to use `children` prop for button text
- How to manage state in one component and pass it to others

---

## Key Rules to Remember

### 1. Component Names Start with Capital Letters

```jsx
// ✅ Correct
function MyComponent() {}

// ❌ Wrong
function myComponent() {}
```

### 2. Return Only One Main Element

```jsx
// ✅ Correct
return (
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
);

// ❌ Wrong
return (
  <h1>Title</h1>
  <p>Content</p>
);
```

### 3. Use Curly Braces for JavaScript

```jsx
const name = "Alice";
return <h1>Hello {name}!</h1>; // ✅ Correct
return <h1>Hello name!</h1>; // ❌ Wrong (shows literal text)
```

### 4. Always Import What You Need

```jsx
import { useState } from "react"; // For using state
import MyComponent from "./MyComponent"; // For using other components
```

---

## Next Steps

Once you understand these basics:

1. **Practice** - Create more components and combine them
2. **Learn useState** - For making interactive components
3. **Learn useEffect** - For side effects like API calls
4. **Learn Props** - For passing data between components
5. **Learn Conditional Rendering** - For showing/hiding content
6. **Learn Lists** - For displaying arrays of data

---

## Quick Reference

### Basic Component Template

```jsx
function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
    </div>
  );
}

export default MyComponent;
```

### Component with State

```jsx
import { useState } from "react";

function MyComponent() {
  const [value, setValue] = useState("initial value");

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue("new value")}>Change Value</button>
    </div>
  );
}
```

### Component with Props

```jsx
function MyComponent({ title, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

// Usage: <MyComponent title="Hello" content="World" />
```

---

_Remember: React is all about breaking your UI into small, reusable pieces (components) and managing the data that changes over time (state). Start simple and build up complexity gradually!_
