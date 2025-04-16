# JavaScript Classes and Objects

## 📖 Introduction

JavaScript supports **object-oriented programming** through the use of **classes and objects**. These allow developers to organize code into reusable blueprints and instances, mirroring real-world entities with structure (properties) and behavior (methods).

---

## 🧠 Definitions

### 🔹 Class

A **Class** is a **blueprint or template** for creating objects. It encapsulates data (properties) and behaviors (methods) that all instances created from the class will share.

### 🔹 Object

An **Object** is an instance of a class. It represents a single entity with its own **state** (data) and **behavior** (methods).

---

## 🧩 Key Concepts

| Concept       | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| Encapsulation | Bundling data and methods into one unit (class)                         |
| Abstraction   | Hiding internal details and showing only relevant info                  |
| Inheritance   | Creating a new class from an existing class                             |
| Polymorphism  | Same method behaving differently in different contexts (via overriding) |

---

## 🔧 Declaring a Class

### ✅ Syntax

```javascript
class ClassName {
  constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
  }

  method1() {
    // Method logic
  }

  method2() {
    // Method logic
  }
}
```

### ✅ Creating an Object

```javascript
let obj = new ClassName(arg1, arg2);
```

---

## 📌 Example: Simple Class and Object

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    console.log(`${this.brand} ${this.model} engine started.`);
  }

  stopEngine() {
    console.log(`${this.brand} ${this.model} engine stopped.`);
  }
}

let myCar = new Car("Toyota", "Camry");
myCar.startEngine(); // Toyota Camry engine started.
myCar.stopEngine(); // Toyota Camry engine stopped.
```

---

## 🧾 Line-by-Line Explanation

- `class Car {...}`: Declares a class named `Car`.
- `constructor(brand, model)`: A special function that initializes new object properties.
- `this.brand`, `this.model`: Refers to the specific object's data.
- `startEngine()` and `stopEngine()`: Methods acting on the object.
- `new Car(...)`: Instantiates an object from the `Car` class.

---

## 👥 Class Inheritance

A class can **extend** another class to inherit its properties and methods.

### ✅ Syntax

```javascript
class ParentClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

class ChildClass extends ParentClass {
  constructor(name, age) {
    super(name); // Call to parent constructor
    this.age = age;
  }

  showAge() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}
```

---

## 🧪 Static Methods

Static methods belong to the class itself, not instances.

```javascript
class MathHelper {
  static square(num) {
    return num * num;
  }
}

console.log(MathHelper.square(5)); // 25
```

---

## 🔐 Getters and Setters

Used to access or update private properties safely.

```javascript
class Student {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName;
  }
}

let s = new Student("Aarav");
console.log(s.name); // AARAV
s.name = "Dev";
console.log(s.name); // DEV
```

---

## 🔒 Private Fields (`#` syntax)

Introduced in modern JS for true encapsulation.

```javascript
class Account {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  showBalance() {
    console.log(`Balance: ₹${this.#balance}`);
  }
}

let acc = new Account(5000);
acc.showBalance(); // ₹5000
// acc.#balance = 10000;   ❌ Error: Private field not accessible
```

---

## 📂 Object Literals vs Classes

JavaScript also supports object creation via **object literals** (without classes):

```javascript
let person = {
  name: "Dev",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

person.greet(); // Hello, Dev
```

---

## 🧪 Real-World Example: Employee Management

```javascript
class Employee {
  constructor(id, name, department) {
    this.id = id;
    this.name = name;
    this.department = department;
  }

  showInfo() {
    return `ID: ${this.id}, Name: ${this.name}, Dept: ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(id, name, department, teamSize) {
    super(id, name, department);
    this.teamSize = teamSize;
  }

  showInfo() {
    return `${super.showInfo()}, Team Size: ${this.teamSize}`;
  }
}

let emp1 = new Employee(101, "Ravi", "Sales");
let mgr1 = new Manager(201, "Neha", "HR", 10);

console.log(emp1.showInfo()); // ID: 101, Name: Ravi, Dept: Sales
console.log(mgr1.showInfo()); // ID: 201, Name: Neha, Dept: HR, Team Size: 10
```

---

## 📚 Summary

| Feature         | Description                                |
| --------------- | ------------------------------------------ |
| Class           | Blueprint for objects                      |
| Object          | Instance of a class                        |
| Constructor     | Initializes object properties              |
| `this`          | Refers to the current object               |
| Inheritance     | One class inherits another (`extends`)     |
| `super()`       | Calls the constructor of the parent class  |
| Static Method   | Belongs to class, not instances (`static`) |
| Getters/Setters | Controlled access to object properties     |
| Private Fields  | Use `#` to declare private variables       |

---

## 💡 Best Practices

- Use classes for scalable, object-oriented design.
- Always initialize properties in the constructor.
- Use inheritance only when there’s a clear "is-a" relationship.
- Prefer `#privateFields` when true data hiding is required.

---

## 🚀 Quick Recap

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog1 = new Dog("Bruno");
dog1.speak(); // Bruno barks.
```
