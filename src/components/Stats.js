// src/components/Stats.js
import React from 'react';
import { useTypingContext } from '../context/TypingContext';
import styled from 'styled-components';

const StatsWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing.large};
  text-align: left;
`;

const Stat = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${(props) => props.theme.spacing.small};
  color: ${(props) => props.theme.colors.text};
`;

const Button = styled.button`
  padding: ${(props) => props.theme.spacing.medium};
  font-size: 1rem;
  margin-top: ${(props) => props.theme.spacing.medium};
  color: white;
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Stats = () => {
  const { calculateWPM, calculateErrors, resetTest, completed } = useTypingContext();

  return (
    <StatsWrapper>
      <Stat>WPM: {completed ? calculateWPM() : 0}</Stat>
      <Stat>Errors: {calculateErrors()}</Stat>
      {completed && (
        <div>
          <Stat>Test Completed!</Stat>
          <Button onClick={resetTest}>Restart</Button>
        </div>
      )}
    </StatsWrapper>
  );
};

export default Stats;
