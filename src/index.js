import React from "react";
import ReactDOM from "react-dom/client";

/* JSX - HTML */
function Greeting() {
  return (
    <React.Fragment>
      <h2>My First Component</h2>
      <ul className="websites">
        <li>
          <a href="https://www.google.com/" tabIndex={0}>
            Google
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
