# Servlets: Overview, Architecture, Life Cycle, and HTTP Requests

---

## Servlet Overview and Architecture

**Q1: What is Servlet?**

- A **Servlet** is a Java program that runs on a web server and handles requests from web browsers (clients).
- Servlets are used to create dynamic web pages (like login forms, shopping carts, etc.).
- They are part of Java EE (Enterprise Edition) and are managed by a **Servlet Container** (like Apache Tomcat).
- Servlets follow a request-response model: the browser sends a request, the servlet processes it, and sends back a response.

**Servlet Architecture Diagram:**

```
Browser <--> Web Server <--> Servlet Container <--> Servlet (Java Code)
```

- The browser sends a request (like clicking a link or submitting a form).
- The web server passes the request to the servlet container.
- The servlet container loads the servlet, which processes the request and sends a response back to the browser.

---

## Interface Servlet and the Servlet Life Cycle

**Q1 & Q2: What is Servlet? Explain the life cycle of Servlet. / Explain the life cycle of servlet in detail.**

- The **Servlet interface** defines methods that every servlet must implement.
- Most web servlets extend the `HttpServlet` class, which already implements the Servlet interface and provides methods for handling HTTP requests.

**Servlet Life Cycle Steps:**

1. **Loading and Instantiation:**
   - The servlet class is loaded by the servlet container.
   - An object of the servlet is created.
2. **Initialization (`init()` method):**
   - Called once when the servlet is first created.
   - Used to set up resources (like database connections).
3. **Request Handling (`service()` method):**
   - Called every time the servlet gets a request.
   - Decides whether to call `doGet()`, `doPost()`, etc.
4. **Destruction (`destroy()` method):**
   - Called once when the servlet is being removed (like when the server stops).
   - Used to clean up resources.
5. **Garbage Collection:**
   - Java's garbage collector removes the servlet object from memory.

**Servlet Life Cycle Diagram:**

```
Load -> init() -> service() [doGet()/doPost()/...] -> destroy() -> GC
```

**Q3: Which class has to be extended for creating a Servlet?**

- For most web applications, extend the `HttpServlet` class.

**Example:**

```java
public class MyServlet extends HttpServlet {
    // Override doGet, doPost, etc.
}
```

---

## Handling HTTP GET Requests

**Q4: Differentiate between handling HTTP GET requests and handling HTTP POST requests.**

- **GET** is used to request data from the server (like loading a web page).
- Data is sent in the URL (e.g., `?name=Sam`).
- GET is not secure for sensitive data (shows in URL) and has limited data size.
- GET requests can be bookmarked and cached.

**How to handle GET in a Servlet:**

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String name = request.getParameter("name");
    response.getWriter().println("Hello, " + name);
}
```

---

## Handling HTTP POST Requests

**Q4: Differentiate between handling HTTP GET requests and handling HTTP POST requests.**

- **POST** is used to send data to the server (like submitting a form).
- Data is sent in the request body (not visible in URL).
- POST is more secure for sensitive data and can send larger amounts of data.
- POST requests are not cached or bookmarked.

**How to handle POST in a Servlet:**

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String name = request.getParameter("name");
    response.getWriter().println("Posted name: " + name);
}
```

**Table: GET vs POST (Q4)**
| Feature | GET (doGet) | POST (doPost) |
|-----------------|--------------------|----------------------|
| Data Location | URL | Request Body |
| Security | Less secure | More secure |
| Data Size | Limited | Large |
| Use Case | Fetch data | Submit data/forms |
| Bookmarked | Yes | No |
| Cached | Yes | No |

---

## Redirecting Requests to Other Resources

- Sometimes, a servlet needs to send the user to another page or resource. This is called **redirection**.
- Redirection tells the browser to go to a new URL.

**How to redirect in a Servlet:**

```java
response.sendRedirect("anotherPage.html");
```

**Example:**

```java
if (userNotLoggedIn) {
    response.sendRedirect("login.html");
}
```

---
