import * as ACTIONS from 'root/constants/weather';

const initialState = {
  cities: [],
  currentCity: []
};

const normalizedCities = cities => {
  return cities.map((res, idx) => {
    let location = null;
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
      console.log(channel);
      return {
        ...state,
        currentCity: {
          forecast: channel.item.forecast,
          location: channel.location
        }
      };
    };
    default: {
      return state;
    };
  }
}

export default weather;
