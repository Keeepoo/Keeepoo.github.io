import React from 'react';

const Stats = ({ wpm, errors, completed }) => {
  return (
    <div>
      <p>WPM: {wpm}</p>
      <p>Errors: {errors}</p>
      {completed && <p>Test Completed!</p>}
    </div>
  );
};

export default Stats;
