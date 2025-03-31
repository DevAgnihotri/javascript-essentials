# Java Async and HTTPS Requests

## 1. What is JSON?

### Definition

JSON (JavaScript Object Notation) is a lightweight data format that is easy to read and write for humans and machines. It is widely used for data interchange between a server and a client.

### Example of JSON Data

```json
{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "job": "Developer"
}
```

### Significance of JSON

- **Language-Independent**: Can be used with multiple programming languages.
- **Easy to Parse and Generate**: Built-in support in JavaScript.
- **Widely Used in APIs and Web Services**: Facilitates data exchange between a client and a server.

## 2. Using JSON in a JavaScript Project

JavaScript provides built-in methods to handle JSON:

### Parsing JSON Data (Converting JSON string to JavaScript object)

```javascript
const jsonString = '{"name": "Alice", "age": 25}'; // JSON formatted string
const jsonObject = JSON.parse(jsonString); // Convert string to JavaScript object
console.log(jsonObject.name); // Output: Alice
```

### Converting Object to JSON (JavaScript object to JSON string)

```javascript
const person = { name: "Bob", age: 28 }; // JavaScript object
const jsonStr = JSON.stringify(person); // Convert object to JSON formatted string
console.log(jsonStr); // Output: {"name":"Bob","age":28}
```

## 3. Asynchronous Programming

Asynchronous programming allows operations to run independently without blocking the execution of the entire program.

### Example using JavaScript Promises

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received"); // Simulating an API response after 2 seconds
    }, 2000);
  });
}

fetchData().then((data) => console.log(data)); // Output after 2 seconds: Data received
```

## 4. Synchronous Programming

Synchronous programming executes one task at a time, blocking execution until the task is completed.

### Example in JavaScript

```javascript
function syncFunction() {
  console.log("Task 1"); // Prints Task 1
  console.log("Task 2"); // Prints Task 2
  console.log("Task 3"); // Prints Task 3
}

syncFunction(); // Function execution is sequential
```

## 5. Differences Between Synchronous and Asynchronous Programming

| Feature     | Synchronous | Asynchronous |
| ----------- | ----------- | ------------ |
| Execution   | Sequential  | Parallel     |
| Blocking    | Yes         | No           |
| Performance | Slower      | Faster       |

## 6. What is AJAX?

AJAX (Asynchronous JavaScript and XML) allows web pages to communicate with a server without reloading.

### Key Components of AJAX:

- **XMLHttpRequest**: An API to send HTTP requests.
- **JavaScript and DOM**: For handling responses.
- **Server-side Processing**: To send data back.

## 7. Best Practices for Implementing AJAX

- **Use JSON instead of XML** for better efficiency and parsing speed.
- **Implement proper error handling** to manage failed requests.
- **Use async/await** for better readability in asynchronous code.
- **Minimize server requests** to improve performance and reduce network load.

## 8. XMLHttpRequest: Purpose and Functionality

### Definition

XMLHttpRequest (XHR) is an API to transfer data between a web browser and a server.

### How to Work with XMLHttpRequest (Step-by-Step Guide)

#### 1. Create an XMLHttpRequest Object

```javascript
var xhr = new XMLHttpRequest(); // Step 1: Create a new XMLHttpRequest object
```

- This object allows us to interact with servers and send HTTP requests.
- It is used to fetch resources from a URL asynchronously.

#### 2. Define the URL to Fetch Data From

```javascript
var url = "./health_records.json"; // Step 2: Define the URL where data is located
```

- The variable `url` stores the path of the JSON file we want to retrieve.
- This can be a local file or an API endpoint.

#### 3. Open a Connection to the Server

```javascript
xhr.open("GET", url, true); // Step 3: Open a connection using the GET method
```

- `open(method, url, async)` initializes the request.
- `GET` is the HTTP method used to request data.
- `url` specifies the location of the resource.
- `true` means the request is asynchronous (non-blocking).

#### 4. Set the Response Type

```javascript
xhr.responseType = "json"; // Step 4: Tell the browser we expect JSON response
```

- `responseType` specifies the format of the response.
- Setting it to `"json"` ensures the response is automatically parsed into a JavaScript object.

#### 5. Handle the Response

```javascript
xhr.onload = function () {
  if (xhr.status === 200) {
    // Check if request was successful
    console.log(xhr.response); // Log the response data
  } else {
    console.error("Error fetching data"); // Handle errors
  }
};
```

- `onload` triggers when the request is completed successfully.
- `xhr.status` checks if the HTTP response status is `200` (OK).
- `xhr.response` contains the parsed JSON data.

#### 6. Handle Errors

```javascript
xhr.onerror = function () {
  console.error("Request failed"); // Log an error message if the request fails
};
```

- `onerror` triggers when there is a network issue or the request fails.

#### 7. Send the Request

```javascript
xhr.send(); // Step 5: Send the request to the server
```

- This actually sends the HTTP request.
- Since it's asynchronous, the browser continues executing the next lines of code without waiting for the response.

### Full XMLHttpRequest Example

```javascript
var xhr = new XMLHttpRequest();
var url = "./health_records.json";

xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.response);
  } else {
    console.error("Error fetching data");
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();
```
