import { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/books';

function useBookContext(){
  return useContext(BooksContext);
}


function BookList() {
  const {books} = useBookContext();
  
 
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} />
    );
  });

  return <div className="book-list">
  {renderedBooks}
  </div>;
}

export default BookList;
