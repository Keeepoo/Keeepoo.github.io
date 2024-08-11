import React from 'react';

const TextDisplay = ({ text, userInput }) => {
  return (
    <div>
      {text.split('').map((char, idx) => {
        let color;
        if (idx < userInput.length) {
          color = char === userInput[idx] ? 'green' : 'red';
        }

        return <span key={idx} style={{ color: color }}>{char}</span>;
      })}
    </div>
  );
};

export default TextDisplay;
