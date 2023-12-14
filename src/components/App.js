
import React,{useState} from "react";
import './../styles/App.css';


const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
let counter=0;
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {clickCount} times</p>
        <button onClick={handleClick}>Click</button>

    </div>
  )
}

export default App
