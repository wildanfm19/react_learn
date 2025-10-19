import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import searchImages from './api';



function App() {
  const handleSubmit = (term) => {
   console.log("Do a search with , " , term);
  };


  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
