import React from 'react';
import { Search, Card } from '../';

const Header = props => {
  return (
    <div>
      <header className="header">
        <div className="header">
          <div className="header-small--title">
            <h1 className="header__title">{'Previsão do Tempo'}</h1>
          </div>
          <Card city={props.city}
                onCloseCard={props.onCloseCard}
                toggleCard={props.toggleCard} />
          <Search onSearch={props.onSearch} />
        </div>
      </header>
    </div>
  );
};

export default Header;
