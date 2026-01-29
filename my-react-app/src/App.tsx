import { useState } from "react";
import "./App.css";

function App() {
  // const [click, setClick] = useState("👁 Reveal Secret");
  //
  const [isToggled, setIsToggled] = useState(false);

  // 2. Create an event handler to toggle the state
  const handleClick = () => {
    // Recommended way: use a function param to get the previous value
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };
  // console.log(click, "asdsa");

  // const handleClick = () => {
  //   console.log("jdhjdhkjzh");
  // };
  return (
    <>
      <h1>🟢 Ex 3: Toggle Visibility</h1>
      <div className="card">
        <button onClick={handleClick}>
          {isToggled ? "🙈 Hide Secret" : "👁 Reveal Secretecret"}
        </button>

        {/* Conditionally render content based on the boolean state */}
        {isToggled && <p>✨ React is awesome! ✨</p>}
      </div>
    </>
  );
}

export default App;
