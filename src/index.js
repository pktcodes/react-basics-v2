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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          laudantium eveniet quasi ex saepe odit quisquam dolores? Perferendis,
          blanditiis expedita.
        </p>
        <button>Click Me</button>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
