import { useState } from "react";
import "./App.css";

function App() {
  const [click, setClick] = useState("");

  return (
    <>
      <h1>🟢 Ex 1: Greeting Component</h1>
      <div className="card">
        <input type="text" onChange={(e) => setClick(e.target.value)} />
        <button id="createBtn">name {click}</button>
      </div>
    </>
  );
}

export default App;
