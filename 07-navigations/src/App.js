
import "./App.css";
import Button from "./Button";
import { MdAddCall } from "react-icons/md";

function App() {
  return (
    <>
      <div>
        <Button  primary rounded >Button 1</Button>
      </div>

       <div>
        <Button secondary rounded><MdAddCall/></Button>
      </div>

       <div>
        <Button success>Button 3</Button>
      </div>

       <div>
        <Button warning>Button 4</Button>
      </div>

       <div>
        <Button danger>Button 5</Button>
      </div>
    </>
  );
}

export default App;
