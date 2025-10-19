import React from 'react'
import {useState} from "react"
import BookCreate from './components/BookCreate';
const App = () => {
  const [book , setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Title: " + title);
  }

  return (
    <div>
      <BookCreate onCreate ={createBook} />
    </div>
  )
}

export default App