# 🧭 Control Statements in JavaScript

Control statements in JavaScript are used to **control the flow of execution** in a program based on certain conditions or repetitions. They allow you to make decisions, repeat code, or jump to other parts of the program.

---

## 🔹 1. Conditional Statements

### 📌 a. `if` Statement

**Definition**: Executes a block of code **if** the condition is true.

**Syntax**:

```javascript
if (condition) {
  // code to be executed if condition is true
}
```

**Example**:

```javascript
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

---

### 📌 b. `if...else` Statement

**Definition**: Executes one block if the condition is true, another block if it is false.

**Syntax**:

```javascript
if (condition) {
  // code if condition is true
} else {
  // code if condition is false
}
```

**Example**:

```javascript
let score = 40;
if (score >= 50) {
  console.log("Passed!");
} else {
  console.log("Failed.");
}
```

---

### 📌 c. `if...else if...else` Ladder

**Definition**: Checks multiple conditions.

**Syntax**:

```javascript
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if none of the above is true
}
```

**Example**:

```javascript
let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

---

### 📌 d. `switch` Statement

**Definition**: Selects one of many code blocks to be executed.

**Syntax**:

```javascript
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
  // default code
}
```

**Example**:

```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Another day");
}
```

**🆚 `if-else` vs `switch`:**
| Feature | `if-else` | `switch` |
|---------------|--------------------------------------|-------------------------------------------|
| Conditions | Works with any condition | Works best with fixed values |
| Readability | Better for complex logic | Cleaner for multiple fixed comparisons |

---

## 🔹 2. Looping Statements

**Definition**: Looping statements in JavaScript are used to **execute a block of code repeatedly** as long as a specified condition is true. They help in automating repetitive tasks and reducing redundancy in code.

### 📌 a. `for` Loop

**Definition**: Repeats code a certain number of times.

**Syntax**:

```javascript
for (initialization; condition; update) {
  // code to execute
}
```

**Example**:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

### 📌 b. `while` Loop

**Definition**: Repeats code **while** the condition is true.

**Syntax**:

```javascript
while (condition) {
  // code to execute
}
```

**Example**:

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

---

### 📌 c. `do...while` Loop

**Definition**: Executes the block **at least once**, then repeats while the condition is true.

**Syntax**:

```javascript
do {
  // code
} while (condition);
```

**Example**:

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

**🆚 `while` vs `do...while`:**
| Feature | `while` | `do...while` |
|------------------|-----------------------------|----------------------------------|
| Execution Check | Checks before execution | Executes once before checking |

---

### 📌 d. `forEach` Loop

**Definition**: The `forEach()` method is used to execute a function **once for each element** in an array. It is **only available for arrays**.

**Syntax**:

```javascript
array.forEach(function (currentValue, index, array) {
  // code to execute
});
```

**Example**:

```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (fruit, index) {
  console.log(index + ": " + fruit);
});
```

🟡 **Arrow Function Version**:

```javascript
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

**🆚 `for` vs `forEach`:**
| Feature | `for` Loop | `forEach` Loop |
|------------------|-----------------------------------|------------------------------------|
| Flexibility | Can break/continue | Cannot break/continue |
| Use Case | Works with all iterable logic | Best for simple array iteration |

---

## 🔹 3. Jump Statements

### 📌 a. `break` Statement

**Definition**: Exits from the current loop or `switch`.

**Example**:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```

---

### 📌 b. `continue` Statement

**Definition**: Skips current iteration and continues the loop.

**Example**:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

---

### 📌 c. `return` Statement

**Definition**: Exits a function and optionally returns a value.

**Example**:

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
```

---

## ✅ Summary

| Type        | Statement Examples                      | Purpose               |
| ----------- | --------------------------------------- | --------------------- |
| Conditional | `if`, `else`, `switch`                  | Make decisions        |
| Looping     | `for`, `while`, `do...while`, `forEach` | Repeat actions        |
| Jump        | `break`, `continue`, `return`           | Change execution flow |

---

✨ These control statements are the building blocks of logic in JavaScript. Mastering them will make your programs smarter and more dynamic!
