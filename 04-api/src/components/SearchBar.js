import {useState} from 'react'

import React from 'react'

const SearchBar = ({onSubmit}) => {
    const [term , setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        setTerm('');
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setTerm(event.target.value)
    }
  return (
   <div>
    <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange}/>
    </form>
   </div>
  )
}


export default SearchBar;
