// src/components/TextInput.js
import React from 'react';
import { useTypingContext } from '../context/TypingContext';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: ${(props) => props.theme.spacing.medium};
  margin-bottom: ${(props) => props.theme.spacing.large};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;

const TextInput = () => {
  const { userInput, handleInputChange } = useTypingContext();

  return (
    <Input
      type="text"
      value={userInput}
      onChange={(e) => handleInputChange(e.target.value)}
      placeholder="Start typing here..."
    />
  );
};

export default TextInput;
