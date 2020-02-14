import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {space, SpaceProps} from 'styled-system';

const StyledDiv = styled.div<SpaceProps>`
  border: 1px solid #ccc;
  ${space}
`;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StyledDiv m="10px">Hello</StyledDiv>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
