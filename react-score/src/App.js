import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [score, setScore] = useState({
    runs: 0,
    wickets: 0,
  });
  const [overs, setOvers] = useState(0);
  const [balls, setBalls] = useState([]);
  const [newOver,setNewOver] = useState(false);

  const MAX_BALLS = 6;

  const handleBall = (runs) => {
    let updatedScore = { ...score };
    let updatedBalls = [...balls];
    if(newOver){
      updatedBalls = [];
      setNewOver(false);
    }
    if (runs === 'WD' || runs === 'NB') {
      updatedScore.runs += 1;
    } 
    else if(runs==='W'){
      updatedBalls = [...balls, 'W'];
      updatedScore.wickets += 1;
    }
    else {
      updatedBalls = [...balls, runs];
      updatedScore.runs += runs;
    }

    if (updatedBalls.length === MAX_BALLS) {
      setOvers(overs + 1);
      setNewOver(true)
    }

    setBalls(updatedBalls);
    setScore(updatedScore);
  };

  return (
    <div className="container">
      <h1 className="heading">Cricket Score Keeper</h1>
      <div className="scoreboard">
        <p className="score">
          Score: {score.runs}/{score.wickets}
        </p>
        <p className="overs">Overs: {overs}</p>
        <p className="last-6-balls">Last 6 Balls: {balls.join(' ')}</p>
      </div>
      <div className="button-container">
        <button className="run-button" onClick={() => handleBall(0)}>
          Dot Ball
        </button>
        <button className="run-button" onClick={() => handleBall(1)}>
          1 Run
        </button>
        <button className="run-button" onClick={() => handleBall(2)}>
          2 Runs
        </button>
        <button className="run-button" onClick={() => handleBall(3)}>
          3 Runs
        </button>
        <button className="run-button" onClick={() => handleBall(4)}>
          4 Runs
        </button>
        <button className="run-button" onClick={() => handleBall(6)}>
          6 Runs
        </button>
        <button className="extra-button" onClick={() => handleBall('W')}>
          Wicket
        </button>
        <button className="extra-button" onClick={() => handleBall('NB')}>
          No Ball
        </button>
        <button className="extra-button" onClick={() => handleBall('WD')}>
          Wide
        </button>
      </div>
    </div>
  );
};

export default App;
