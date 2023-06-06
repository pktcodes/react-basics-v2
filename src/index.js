import React from "react";
import ReactDOM from "react-dom/client";

/* JSX - HTML */
function Greeting() {
  return (
    <>
      <h2>My First Component</h2>
      <Heading />
      <Websites />
    </>
  );
}

/* Implicit Return */
const Heading = () => <h3>Websites</h3>;

/* Explicit Return */
const Websites = () => {
  return (
    <ul>
      <li>
        <a href="https://react.dev/" target="blank">
          React
        </a>
      </li>
      <li>
        <a href="https://www.google.com/">Google</a>
      </li>
    </ul>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
