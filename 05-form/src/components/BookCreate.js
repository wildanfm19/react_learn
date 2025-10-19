import React from "react";
import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
  }

  const handleOnChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="book-create">
      <form onSubmit={handleOnSubmit}>
        <p>Add Book</p>
        <label>Title</label>
        <input className="input" value={title} onChange={handleOnChange} />
        <button className="button" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookCreate;
