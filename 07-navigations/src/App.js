
import "./App.css";
import Accordion from "./components/Accordion";
import Accordion2 from "./components/Accordion2";


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
     <Accordion2 items= {item}/>
  )

 
}

export default App;
