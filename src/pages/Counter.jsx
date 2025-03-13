import { useState } from "react";
import Team from "../components/Team"; 
import ResetButton from "../components/ResetButton";
import TeamForm from "../components/TeamForm";

const Counter = () => {
  const [teamAName, setTeamAName] = useState("Team A");
  const [teamBName, setTeamBName] = useState("Team B");
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <div className="counter-page">
      <h1>🏆 Team Score Counter 🏆</h1>
      <TeamForm setTeamA={setTeamAName} setTeamB={setTeamBName} />
      <div className="teams-container">
        <Team name={teamAName} score={teamAScore} increaseScore={() => setTeamAScore(teamAScore + 1)} decreaseScore={() => setTeamAScore(teamAScore > 0 ? teamAScore - 1 : 0)} />
        <Team name={teamBName} score={teamBScore} increaseScore={() => setTeamBScore(teamBScore + 1)} decreaseScore={() => setTeamBScore(teamBScore > 0 ? teamBScore - 1 : 0)} />
      </div>
      <ResetButton resetScores={resetScores} />
    </div>
  );
};

export default Counter;
