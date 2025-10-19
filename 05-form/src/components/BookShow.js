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

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <Bookedit book = {book} OnEdit = {OnEdit}/>
    }


  return (
    <div className='book-show'>
        <div>{content}</div>
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


