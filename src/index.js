import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/51Azhu94JlL._SX348_BO1,204,203,200_.jpg",
  title: "Interesting Facts For Curious Minds",
  author: "Jordan Moore",
};

const secondBook = {
  img: "./images/book-1.jpg",
  title: "Atomic Habits: Build Good Habits",
  author: "James Clear",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
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
