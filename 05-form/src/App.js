import React from "react";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];

    setBooks(updatedBook);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (id , newTitle) => {
    const updatedBooks = books.map((book) => {
      if(book.id === id){
        return {...book , title : newTitle};
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} OnDelete={deleteBookById} OnEdit = {editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
