import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Score from "./component/score";

function App() {
  const [text1, setText1] = useState("");
  const [number, setNumber] = useState([]);
  const [id, setId] = useState([]);
  const [idn, setIdn] = useState([]);
  const text = (e) => {
    setText1(e.target.value);
  };
  const game = (e) => {
    e.preventDefault();
    console.log(text1, number);
    if (text1 == number) {
      setId(`Correct Guess You WIN`);
      setIdn(1);
      console.log("equal");
    } else if (text1 < number) {
      setId(`Your Guess is Too LOW`);
      setIdn(2);
      console.log("too low");
    } else {
      setId(`Your Guess is Too HIGH`);
      setIdn(3);
      console.log("too high");
    }
    setText1("");
  };
  useEffect(() => {
    let number1 = Math.floor(Math.random() * 100);
    setNumber(number1);
  }, []);

  return (
    <div className="box">
      <div className="title">
        <span>Guess the Number</span>
      </div>
      <div className="game">
        <input type="text" placeholder="NUM" onChange={text} value={text1} />
        <button onClick={game}>Guess</button>
        <Score id={id} idn={idn} />
      </div>
    </div>
  );
}

export default App;
