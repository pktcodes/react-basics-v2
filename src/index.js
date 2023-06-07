import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg"
      alt="Atomic Habits"
    />
  );
};
const Title = () => <h2>Atomic Habits</h2>;
const Author = () => <h4>James Clear </h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
