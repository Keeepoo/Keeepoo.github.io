// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { TypingProvider } from './context/TypingContext';
import TextDisplay from './components/TextDisplay';
import TextInput from './components/TextInput';
import Stats from './components/Stats';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.large};
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TypingProvider>
        <Container>
          <Title>Typing Speed Trainer</Title>
          <TextDisplay />
          <TextInput />
          <Stats />
        </Container>
      </TypingProvider>
    </ThemeProvider>
  );
};

export default App;
