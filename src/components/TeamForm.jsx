import { useState } from "react";

const TeamForm = ({ setTeamA, setTeamB }) => {
  const [teamAName, setTeamAName] = useState("Team A");
  const [teamBName, setTeamBName] = useState("Team B");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeamA(teamAName);
    setTeamB(teamBName);
  };

  return (
    <form onSubmit={handleSubmit} className="team-form">
      <input
        type="text"
        placeholder="Enter Team A Name"
        value={teamAName}
        onChange={(e) => setTeamAName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Team B Name"
        value={teamBName}
        onChange={(e) => setTeamBName(e.target.value)}
      />
      <button type="submit">Set Teams</button>
    </form>
  );
};

export default TeamForm;
