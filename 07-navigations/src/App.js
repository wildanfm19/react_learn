
import "./App.css";
import Accordion from "./components/Accordion";


function App() {
  const item = [
    {
      id : '1234',
      label : 'Can I use React on a Project?',
      content : 'You can use React on any project you want'
    },
    {
      id: '12552',
       label : 'Can I use React on a Project?',
      content : 'You can use React on any project you want'
    },
    {
      id : '52151',
      label : 'Can I use React on a Project?',
      content : 'You can use React on any project you want'
    }
  ];

  return(
     <Accordion items= {item}/>
  )

 
}

export default App;
