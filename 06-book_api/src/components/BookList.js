import { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/books';

function BookList({ books, onDelete, onEdit }) {
  const value = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return <div className="book-list">
  {value}
  {renderedBooks}
  </div>;
}

export default BookList;
