import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const score = (props.total / props.outof) * 100;

  return (
    <div className="score-container">
      <h2 className="main-heading">Student Details:</h2>
      <p><strong className="label-blue">Name:</strong> {props.name}</p>
      <p><strong className="label-red">School:</strong> {props.school}</p>
      <p><strong className="label-purple">Total:</strong> {props.total}Marks</p>
      <p><strong className="label-green">Score:</strong>{score.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
