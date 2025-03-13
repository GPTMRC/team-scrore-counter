import React from "react";

const Team = ({ name, score, increaseScore, decreaseScore }) => {
  return (
    <div style={styles.team}>
      <h2>{name}</h2>
      <h3>{score}</h3>
      <button onClick={increaseScore} style={styles.button}>+1</button>
      <button onClick={decreaseScore} style={styles.button}>-1</button>
    </div>
  );
};

const styles = {
  team: {
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "150px",
    textAlign: "center",
  },
  button: {
    fontSize: "16px",
    margin: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Team;
