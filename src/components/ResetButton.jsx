import React from "react";

const ResetButton = ({ resetScores }) => {
  return (
    <button onClick={resetScores} style={styles.resetButton}>Reset</button>
  );
};

const styles = {
  resetButton: {
    marginTop: "20px",
    fontSize: "18px",
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ResetButton;
