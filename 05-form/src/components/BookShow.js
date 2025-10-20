import React from 'react'
import {useState} from 'react';
import Bookedit from './Bookedit';

const BookShow = ({book , OnDelete , OnEdit}) => {
    const [showEdit , setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        OnDelete(book.id);
    }

    const handleEditClick = () =>{
        setShowEdit(!showEdit);
    }
    const handleSubmit = (id , newTitle) => {
        setShowEdit(false);
        OnEdit(id,  newTitle);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <Bookedit onSubmit={handleSubmit} book = {book} />
    }


  return (
    <div className='book-show'>
        <div>{content}</div>
        <img 
            alt='books'
            src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
        <div className='actions'>
            <button className='edit' onClick={handleEditClick}>
                Edit
            </button>
            <button className='delete' onClick={handleDeleteClick}>
                Delete
            </button>
        </div>

    </div>
  )
}

export default BookShow


