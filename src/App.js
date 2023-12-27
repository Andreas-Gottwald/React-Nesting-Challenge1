import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Pfui");
  }
  return (
    <main>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button onClick={handleClick}>Button 4</Button>
    </main>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}
