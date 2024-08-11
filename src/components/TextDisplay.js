// src/components/TextDisplay.js
import React from 'react';
import { useTypingContext } from '../context/TypingContext';
import styled from 'styled-components';

const TextWrapper = styled.div`
  font-size: 1.5rem;
  margin-bottom: ${(props) => props.theme.spacing.large};
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: left;
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const Char = styled.span`
  color: ${({ isCorrect, theme }) =>
    isCorrect === null ? theme.colors.text : isCorrect ? theme.colors.correct : theme.colors.incorrect};
  font-weight: ${({ isCorrect }) => (isCorrect === null ? 'normal' : 'bold')};
`;

const TextDisplay = () => {
  const { text, userInput } = useTypingContext();

  return (
    <TextWrapper>
      {text.split('').map((char, idx) => {
        let isCorrect = null;
        if (idx < userInput.length) {
          isCorrect = char === userInput[idx];
        }
        return (
          <Char key={idx} isCorrect={isCorrect}>
            {char}
          </Char>
        );
      })}
    </TextWrapper>
  );
};

export default TextDisplay;
