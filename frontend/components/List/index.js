import React from 'react';

const List = () => (
  <div className="capitals">
    <h3 className="capitals__title">{'Capitais'}</h3>

    <div className="weather-col-1">
      <ul className="list-weather-1">
        <li className="list-weather-1__title">{'Min'}</li>
        <li>{'12°'}</li>
        <li>{'14°'}</li>
        <li>{'21°'}</li>
        <li>{'24°'}</li>
        <li>{'34°'}</li>
      </ul>
      <ul className="list-weather-2">
        <li className="list-weather-1__title">{'Max'}</li>
        <li>{'4°'}</li>
        <li>{'14°'}</li>
        <li>{'21°'}</li>
        <li>{'24°'}</li>
        <li>{'23°'}</li>
      </ul>
      <ul className="list-weather-3">
        <li>{'Rio de Janeiro'}</li>
        <li>{'Santa Catarina'}</li>
        <li>{'Goaias'}</li>
        <li>{'Campina Grande'}</li>
        <li>{'Curitiba'}</li>
      </ul>
    </div>
    <div className="weather-col-2">
      <ul className="list-weather-1 list-weather-1--remove-top">
        <li className="list-weather-2__title">{'Min'}</li>
        <li>{'12°'}</li>
        <li>{'14°'}</li>
        <li>{'21°'}</li>
        <li>{'24°'}</li>
        <li>{'34°'}</li>
      </ul>
      <ul className="list-weather-2 list-weather-1--remove-top">
        <li className="list-weather-2__title">{'Max'}</li>
        <li>{'4°'}</li>
        <li>{'14°'}</li>
        <li>{'21°'}</li>
        <li>{'24°'}</li>
        <li>{'23°'}</li>
      </ul>
      <ul className="list-weather-4">
        <li>{'Rio de Janeiro'}</li>
        <li>{'Santa Catarina'}</li>
        <li>{'Goaias'}</li>
        <li>{'Campina Grande'}</li>
        <li>{'Curitiba'}</li>
      </ul>
    </div>
  </div>
);

export default List;
