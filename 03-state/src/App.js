import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




function App() {
  const [count , setCount  ] =  useState(0);

  const handleClick = () => {
    setCount(count  + 1);
  }

  return (
   <div>
    <button onClick={handleClick}>Tambah angka</button>
    <p>angka : {count} </p>
   </div>

   
  );
}

export default App;
