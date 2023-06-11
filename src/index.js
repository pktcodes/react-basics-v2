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
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleInputChange = () => {
    console.log("Handle Input Change");
  };

  const handleButtonClick = () => {
    alert("Handle Button Click");
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
          onChange={handleInputChange}
        />
      </form>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);
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
