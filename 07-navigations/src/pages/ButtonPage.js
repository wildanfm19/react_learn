
import Button from "../components/Button";
import { MdAddCall } from "react-icons/md";

function ButtonPage() {

  const handleClick = () => {
    console.log("test");
  }
  return (
    <>
      <div>
        <Button  primary rounded onClick={handleClick} >Button 1</Button>
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

export default ButtonPage;
