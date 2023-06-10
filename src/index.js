import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return <img src="./images/book-1.jpg" alt="Atomic Habits" />;
};
const Title = () => <h2>Atomic Habits</h2>;

const Author = () => {
  const inlineHeadingStyles = {
    color: "red",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };

  return <h4 style={inlineHeadingStyles}>James Clear</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
