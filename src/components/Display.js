import React from "react";

// todo: destructure state needed

function Display(props) {
  return (
    <div>
      <h2>Player At Bat</h2>
      <div>
        <div>
          <h4>Balls</h4>
          <p>{props.balls}</p>
        </div>
        <div>
          <h4>Strikes</h4>
          <p>{props.strikes}</p>
        </div>
      </div>
    </div>
  );
}

export default Display;
