import React from 'react';

const TextInput = ({ userInput, onInputChange }) => {
  return (
    <input 
      type="text" 
      value={userInput}
      onChange={(e) => onInputChange(e.target.value)}
      disabled={false}
      style={{ width: '100%', fontSize: '18px' }}
    />
  );
};

export default TextInput;
