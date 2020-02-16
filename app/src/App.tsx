import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {space, SpaceProps} from 'styled-system';
import HomeNewsGrid from './components/HomeNewsGrid/HomeNewsGrid';
import {ThemeProvider} from './ui/theme/ThemeProvider';
import {buildTheme} from './ui/theme/theme';
import MasonryGrid2Rows from './ui/components/MasonryGrid2Rows';

const StyledDiv = styled.div<SpaceProps>`
  border: 1px solid #ccc;
  ${space}
`;
const theme = {...buildTheme(), cardImage: {title: {border: '1px solid #f0f'}}};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomeNewsGrid height="50vh" width="100vw" />
      </div>
    </ThemeProvider>
  );
};

export default App;
