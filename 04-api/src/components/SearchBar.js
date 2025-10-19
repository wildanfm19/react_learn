import './SearchBar.css'
import React from 'react'
import {useState} from 'react'

const SearchBar = ({onSubmit}) => {
    const [term , setTerm] = useState('');

    const handleFormSubmit= (event) => {
        event.preventDefault();
        onSubmit(term);
        setTerm('');
    }

    const handleOnChange = (event) => {
        setTerm(event.target.value);
    };

  return (
    <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
            <input value={term} onChange={handleOnChange} />
        </form>
    </div>
  )
}

export default SearchBar;