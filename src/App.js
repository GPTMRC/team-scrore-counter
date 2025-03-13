import { useState } from "react";
import Team from "./components/team"; // Importing Team component
import ResetButton from "./components/ResetButton"; // Importing ResetButton component

function App() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <div style={styles.container}>
      <h1>🏆 Team Score Counter 🏆</h1>
      <div style={styles.teamsContainer}>
        <Team 
          name="Team A" 
          score={teamAScore} 
          increaseScore={() => setTeamAScore(teamAScore + 1)}
          decreaseScore={() => setTeamAScore(teamAScore > 0 ? teamAScore - 1 : 0)}
        />
        <Team 
          name="Team B" 
          score={teamBScore} 
          increaseScore={() => setTeamBScore(teamBScore + 1)}
          decreaseScore={() => setTeamBScore(teamBScore > 0 ? teamBScore - 1 : 0)}
        />
      </div>
      <ResetButton resetScores={resetScores} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  teamsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
  },
};

export default App;
