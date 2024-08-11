// src/context/TypingContext.js
import React, { createContext, useState, useContext } from 'react';

const TypingContext = createContext();

export const useTypingContext = () => useContext(TypingContext);

export const TypingProvider = ({ children }) => {
  const [text, setText] = useState("This is a typing speed test. Type as fast as you can!");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [completed, setCompleted] = useState(false);

  const handleInputChange = (input) => {
    if (!startTime) {
      setStartTime(new Date());
    }

    setUserInput(input);

    if (input === text) {
      setCompleted(true);
    }
  };

  const calculateWPM = () => {
    const timeTaken = (new Date() - startTime) / 1000 / 60;
    const wordsTyped = userInput.split(' ').length;
    return Math.round(wordsTyped / timeTaken);
  };

  const calculateErrors = () => {
    let errors = 0;
    text.split('').forEach((char, idx) => {
      if (char !== userInput[idx]) {
        errors += 1;
      }
    });
    return errors;
  };

  const resetTest = () => {
    setUserInput("");
    setStartTime(null);
    setCompleted(false);
  };

  return (
    <TypingContext.Provider value={{
      text,
      userInput,
      handleInputChange,
      calculateWPM,
      calculateErrors,
      resetTest,
      completed,
    }}>
      {children}
    </TypingContext.Provider>
  );
};
