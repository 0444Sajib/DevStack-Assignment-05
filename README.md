## DevStack-Assignment-05
A responsive React website allows visitors to learn web-development tools and create their own stack.

## Technologies Used
React.js
TypeScript
Tailwind CSS
DaisyUI
React-Toastify
JSON
Vite

## 3 Main Features
Users can add technologies to a personal stack.
Duplicate technologies are blocked and shown with a toast warning.
Users can remove one technology or remove the whole stack

## Run the Project
npm install
npm run dev


### React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript or TypeScript. React
uses JSX because it makes UI code easier to read and write.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores data that can change. I used it for the technology
list, selected stack, and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component renders. I used it to fetch
the technology JSON file when the app starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the key to identify each item. It helps React understand
which item changed, was added, or was removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I
used it in the stack panel: when the stack is empty, it shows the empty
message; otherwise, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent sends data through props. The parent can also send a function
as a prop, and the child calls that function to send an action back to
the parent.




