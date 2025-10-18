import logo from './logo.svg';
import './App.css';

const handleClick = () => {
  console.log("Clicked");
}

function App() {
  return (
   <div>
    <button onClick={handleClick}>
      Add Animal
    </button>
   </div>
  );
}

export default App;
