import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Paginas //
import Main from './pages/Main';

const Routes = () => (
    <BrowserRouter>
        
        <Switch>
            <Route exact path="/" component={ Main } />
        </Switch>

    </BrowserRouter>
);

export default Routes;