
import "./App.css";
import Button from "./Button";

function App() {
  return (
    <>
      <div>
        <Button primary >Button 1</Button>
      </div>

       <div>
        <Button secondary>Button 2</Button>
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
