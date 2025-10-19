import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AnimalShow from './animalShow';


function getRandomAnimal(){
  const animals = ["bird" , "cat" , "dog" , "elephant" , "fish"];
  return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
  const [animals , setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals , getRandomAnimal()]);
  }

  const renderedAnimal = animals.map((animal , index) => {
    return <AnimalShow type={animal} key={index}/>
  })

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animals</button>
      <div className='animal-list'>
        Animal : {renderedAnimal}
      </div>
    </div>
  )
}

export default App;
