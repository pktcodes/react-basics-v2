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
  const getBook = (id) => {
    const findBook = books.find((book) => book.id === id);
    console.log(findBook);
  };

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, id, getBook } = props;
  // console.log(props);

  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>Display Book</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
