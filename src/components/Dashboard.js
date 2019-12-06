import React from "react";

function Dashboard({
  handleAddHit,
  handleAddBall,
  handleAddStrike,
  handleAddFoul
}) {
  //todo: add onClicks to each button with the passed in functions

  return (
    <div>
      <h2>Official's Dashboard of Power</h2>
      <div>
        <button onClick={handleAddStrike}>Strike</button>
        <button onClick={handleAddBall}>Ball</button>
        <button onClick={handleAddFoul}>Foul</button>
        <button onClick={handleAddHit}>Hit</button>
      </div>
    </div>
  );
}

export default Dashboard;
