import React from "react";
import "./style.css";

const Score = ({ id, idn }) => {
  function refreshPage() {
    window.location.reload();
  }
  if (idn != 1) {
    return (
      <div>
        <h1>{id}</h1>
      </div>
    );
  } else {
    return (
      <div className="reload">
        <h1>{id}</h1>
        <button onClick={refreshPage}>RESTART GAME</button>
      </div>
    );
  }
};

export default Score;
