import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { Name, School, Total, Goal } = props;

  // Average = Total marks obtained / Number of subjects (Goal)
  const average = (Total / Goal).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student Score Card</h2>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>School:</strong> {School}</p>
      <p><strong>Total Marks:</strong> {Total}</p>
      <p><strong>Number of Subjects:</strong> {Goal}</p>
      <p className="average"><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;