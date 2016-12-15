import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Card from '../containers/card';
import Capitals from '../containers/capitals';

export default class App extends Component {
    render() {        
        return (
            <div>
              <header>
                  <h1>Previsão do Tempo</h1>
                  <Card />
                  <SearchBar />
              </header>
              <Capitals />
            </div>
        );
    }
}
