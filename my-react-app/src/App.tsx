import { useState } from "react";
import "./App.css";

function App() {
  const [click, setClick] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <h1>🟢 Ex 4: Props & Cards</h1>
      <div className="card">
        <article>
          <input type="text" onChange={(e) => setClick(e.target.value)} />
          <button id="createBtn">name {click}</button>
        </article>
        <input type="number" onChange={(e) => setAge(e.target.value)} />
        <button id="createBtn">age {age}</button>
        <p>
          {click}
          {age}
        </p>
      </div>
    </>
  );
}

export default App;
