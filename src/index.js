import React from "react";
import ReactDOM from "react-dom/client";

/* JSX - HTML */
function Greeting() {
  return (
    <div>
      <h2>My First Component</h2>
    </div>
  );
}

// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "My First Component")
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

console.log(ReactDOM);
