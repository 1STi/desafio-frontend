import React from 'react';
import { Search, Card } from '../';

const Header = props => {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">{'Previsão do Tempo'}</h1>
        <Card />
        <Search onSearch={props.onSearch}/>
      </header>
    </div>
  );
};

export default Header;
