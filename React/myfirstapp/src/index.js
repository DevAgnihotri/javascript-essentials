// Importing the React library to use React components and features.
import React from 'react';

// Importing ReactDOM to interact with the DOM and render React components.
import ReactDOM from 'react-dom/client';

// Importing the App component, which is the main component of the application.
import App from './App';

// Creating a root element to render the React application.
// ReactDOM.createRoot initializes the React rendering process for the specified DOM element.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Defining a function named 'ref' that renders the App component into the root element.
// This function is called repeatedly to re-render the App component.
function ref() {
  root.render(<App/>); // Renders the App component inside the root DOM element.
}

// Using setInterval to call the 'ref' function every 1000 milliseconds (1 second).
// This creates a loop that re-renders the App component every second.
setInterval(ref, 1000);
