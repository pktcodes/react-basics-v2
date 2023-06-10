import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const img = "./images/book-1.jpg";
const title = "Atomic Habits: Build Good Habits";
const author = "James Clear";

const BookList = () => {
  return (
    <section className="booklist">
      <Book img={img} title={title} author={author} />
      <Book img={img} title={title} author={author} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
