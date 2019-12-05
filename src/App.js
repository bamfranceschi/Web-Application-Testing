import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

import "./App.css";

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);

  //need logic to calculate hits
  //simple increment function
  const addHit = () => {
    return setHit(hit + 1);
  };

  //need logic to calculate balls
  // increment until 4 then reset to 0

  const addBall = () => {
    if (ball < 4) {
      setBall(ball + 1);
    } else {
      setBall(0);
    }
  };

  //need logic to calculate strikes
  // increment until 3 then reset to 0

  const addStrike = () => {
    if (strike < 3) {
      setStrike(strike + 1);
    } else {
      setStrike(0);
    }
  };

  //need logic to calculate fouls
  //fouls increase strike count by 1, only if strike count is less than 2

  // const addFirstFoul = () => {
  //   if (strike === 0) {
  //     setFoul(foul + 1);
  //   }
  //   return setStrike(1);
  // };

  // const addSecondFoul = () => {
  //   if (strike === 1) {
  //     setFoul(foul + 1);
  //   }
  //   return setStrike(2);
  // };

  // const addMoreFouls = () => {
  //   if (strike === 2) {
  //     setFoul(0);
  //   }
  //   return foul;
  // };

  const addFoul = () => {
    if (strike < 3) {
      setFoul(foul + 1);
      setStrike(strike + 1);
    }
  };

  //todo: need to import both components, need to pass down functions and state

  return (
    <div className="App">
      <Display balls={ball} strikes={strike} />
      <Dashboard
        handleAddHit={addHit}
        handleAddBall={addBall}
        handleAddStrike={addStrike}
        handleAddFoul={addFoul}
      />
    </div>
  );
}

export default App;
