import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    img: "https://m.media-amazon.com/images/I/51Azhu94JlL._SX348_BO1,204,203,200_.jpg",
    title: "Interesting Facts For Curious Minds",
    author: "Jordan Moore",
    id: 1,
  },
  {
    img: "./images/book-1.jpg",
    title: "Atomic Habits: Build Good Habits",
    author: "James Clear",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
