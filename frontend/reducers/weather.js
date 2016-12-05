import * as ACTIONS from 'root/constants/weather';

const initialState = {
  cities: [],
  currentCity: null
};

const normalizedCities = cities => {
  // @TODO we need to use reduce
  const listCities = cities.map((res, idx) => {
    let location = null;
    let listForecasts;
    const { data: { query } } = res;
    let forecastByCity = [];
    if (query.results
        && query.results.channel
        && query.results.channel.length) {
      forecastByCity = query.results.channel.map(c => {
        if (!location) {
          location = c.location;
        }
        return c.item;
      });
    }
    return { city: location, forecasts: forecastByCity };
  });
  return listCities.filter(city => city.forecasts.length);
};

function weather(state = initialState, action) {
  switch(action.type) {
    case ACTIONS.REQUEST_ALL_CITIES: {
      const { cities } = action;
      const listOfCities = normalizedCities(cities);
      return {
        ...state,
        cities: listOfCities
      };
    };
    case ACTIONS.REQUEST_SINGLE_CITY: {
      const { channel } = action.city;
      const forecast = channel.item.forecast;

      const today = new Date().getDay();
      const initial = today == 0 ? 1 : today + 1;
      const allTemperatureOfWeek = forecast.slice(initial, initial + 5) || [];
      return {
        ...state,
        currentCity: {
          forecast: channel.item.forecast,
          location: channel.location,
          humidity: channel.atmosphere.humidity,
          wind: channel.wind.speed,
          media: null,
          temperatureOfWeek: allTemperatureOfWeek,
          temperatureToday: channel.item.forecast
                            && ((parseInt(forecast[0].low) + parseInt(forecast[0].high)) / 2)
        }
      };
    };
    default: {
      return state;
    };
  }
}

export default weather;
