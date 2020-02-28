import {useDispatch} from 'react-redux';
import {
  ActionData,
  ForecastCondition,
  LocationForecast,
  translateCondition,
  translateWeekday,
  Weekday,
} from '../common';
import {Dispatch} from 'redux';
import {get, LocationApiResponse} from '../../api';

export type CityForecast = {
  data?: LocationForecast;
  isCapital: boolean;
  isLoading: boolean;
  error?: any;
};

export const TYPES = {
  FETCH_LOCATION: 'FETCH_LOCATION',
  FETCH_LOCATION_SUCCESS: 'FETCH_LOCATION/SUCCESS',
  FETCH_LOCATION_ERROR: 'FETCH_LOCATION/ERROR',
};

// SEARCH_LOCATION: 'SEARCH_LOCATION',
//   SEARCH_LOCATION_SUCCESS: 'SEARCH_LOCATION/SUCCESS',
//   SEARCH_LOCATION_ERROR: 'SEARCH_LOCATION/ERROR',
//   SELECT_LOCATION: 'SELECT_LOCATION',

function convertResponse(raw: LocationApiResponse): CityForecast['data'] {
  const {location, current_observation: curr, forecasts} = raw;
  return {
    woeid: location?.woeid,
    city: location?.city,
    region: location?.region,
    country: location.country,
    humidity: curr.atmosphere.humidity,
    wind: curr.wind.speed,
    feelsLike: curr.condition.temperature, //!<== calc using: https://github.com/strikeentco/feels
    forecasts: forecasts.map((src: ForecastCondition) => ({
      day: translateWeekday(src.day),
      date: src.date,
      low: src.low,
      high: src.high,
      text: translateCondition(src.code),
      code: src.code,
    })) as ForecastCondition[],
  };
}

type CapitalActions = {
  get(woeid: number): void;
};

const useCapitalActions = (): CapitalActions => {
  const dispatch = useDispatch<Dispatch<ActionData>>();
  return {
    async get(woeid: number) {
      dispatch({type: TYPES.FETCH_LOCATION, payload: {woeid}});
      try {
        const resp = await get({woeid});
        dispatch({type: TYPES.FETCH_LOCATION_SUCCESS, payload: resp});
      } catch (e) {
        dispatch({type: TYPES.FETCH_LOCATION_ERROR, payload: e});
      }
    },
  };
};

export default useCapitalActions;
