import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import "./App.css";

//simple increment function
export const addHit = ({ hit, setHit }) => {
  debugger;
  return setHit(hit + 1);
};

// increment until 4 then reset to 0

export const addBall = ({ ball, setBall }) => {
  if (ball < 4) {
    setBall(ball + 1);
  } else {
    setBall(0);
  }
};

// increment until 3 then reset to 0

export const addStrike = ({ strike, setStrike }) => {
  if (strike < 3) {
    setStrike(strike + 1);
  } else {
    setStrike(0);
  }
};

//fouls increase strike count by 1, only if strike count is less than 2

export const addFoul = ({ foul, setFoul, strike, setStrike }) => {
  if (strike < 3) {
    setFoul(foul + 1);
    setStrike(strike + 1);
  }
};

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);

  //todo: need to import both components, need to pass down functions and state

  return (
    <div className="App">
      <Display balls={ball} strikes={strike} />
      <Dashboard
        handleAddHit={() => addHit({ hit, setHit })}
        handleAddBall={() => addBall({ ball, setBall })}
        handleAddStrike={() => addStrike({ strike, setStrike })}
        handleAddFoul={() => addFoul({ foul, setFoul, strike, setStrike })}
      />
    </div>
  );
}

export default App;
