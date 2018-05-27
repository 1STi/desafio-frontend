import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './style.scss';
import AppShell from './AppShell';

ReactDOM.render(
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>, 
document.getElementById('root'));
