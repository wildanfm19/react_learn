import React from 'react'
import BookShow from './BookShow'

const BookList = ({books , OnDelete , OnEdit}) => {
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} OnDelete= {OnDelete} OnEdit = {OnEdit}/>
    })

  return (
    <div className='book-list'>
        {renderedBooks}
    </div>
  )
}

export default BookList