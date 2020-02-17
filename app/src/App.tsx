import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import styled from 'styled-components';
import {space, SpaceProps} from 'styled-system';
import HomeNewsGrid from './components/HomeNewsGrid/HomeNewsGrid';
import {ThemeProvider} from './ui/theme/ThemeProvider';
import {buildTheme} from './ui/theme/theme';
import MasonryGrid2Rows from './ui/components/MasonryGrid2Rows';
import {store} from './state/store';

const theme = {...buildTheme(), cardImage: {title: {border: '1px solid #f0f'}}};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <HomeNewsGrid height="50vh" width="100vw" />
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
