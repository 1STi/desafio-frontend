import React from 'react';

// @TODO: Rethink this structure to avoid maps
const List = props => {
  const { cities } = props;
  const hasCity = cities.length || null;
  const firstCitiesList = hasCity ? cities.slice(1, 6) : null;
  const secondCitiesList = hasCity ? cities.slice(7, 12) : null;

  let firstCol = [];
  let secondCol = [];
  let thirdCol = [];
  let fourthCol = [];
  let fifthCol = [];
  let sixthCol = [];
  if (firstCitiesList && secondCitiesList) {
    firstCitiesList.map((c, idx) => {
      firstCol.push((<div key={idx}>{`${c.forecasts[0].forecast.low}`}</div>));
      secondCol.push((<div key={idx}>{`${c.forecasts[0].forecast.high}`}</div>));
      thirdCol.push((<div key={idx}>{`${c.city.city}`}</div>));
    });
    secondCitiesList.map((c, idx) => {
      fourthCol.push((<div key={idx}>{`${c.forecasts[0].forecast.low}`}</div>));
      fifthCol.push((<div key={idx}>{`${c.forecasts[0].forecast.high}`}</div>));
      sixthCol.push((<div key={idx}>{`${c.city.city}`}</div>));
    });
  }
  return (
    <div className="capitals">
      <h3 className="capitals__title">{'Capitais'}</h3>
      { hasCity ?
        <div>
          <div className="weather-col-1">
            <div className="list-weather-1">
              <div className="list-weather-1__title">{'Min'}</div>
              {firstCol}
            </div>
            <div className="list-weather-2">
              <div className="list-weather-1__title">{'Max'}</div>
              {secondCol}
            </div>
            <div className="list-weather-3">
              {thirdCol}
            </div>
          </div>
          <div className="weather-col-2">
            <div className="list-weather-1 list-weather-1--remove-top">
              <div className="list-weather-2__title">{'Min'}</div>
              {fourthCol}
            </div>
            <div className="list-weather-2 list-weather-1--remove-top">
              <div className="list-weather-2__title">{'Max'}</div>
              {fifthCol}
            </div>
            <div className="list-weather-4">
              {sixthCol}
            </div>
          </div>
        </div>
      : <span>{'Carregando...'}</span>}
    </div>
  );
};

export default List;
