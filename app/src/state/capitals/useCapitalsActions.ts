import {useDispatch} from 'react-redux';
// @ts-ignore
import Feels from 'feels';
import {
  ActionData,
  ForecastCondition,
  LocationForecast,
  translateCondition,
  translateWeekday,
} from '../common';
import {Dispatch} from 'redux';
import {get, getOpts, LocationApiResponse} from '../../api';
import {useMemo} from 'react';

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
  REMOVE_LOCATION: 'REMOVE_LOCATION',
};

// SEARCH_LOCATION: 'SEARCH_LOCATION',
//   SEARCH_LOCATION_SUCCESS: 'SEARCH_LOCATION/SUCCESS',
//   SEARCH_LOCATION_ERROR: 'SEARCH_LOCATION/ERROR',
//   SELECT_LOCATION: 'SELECT_LOCATION',

function getFeelsLike(temp: number, humidity: number, speed: number): number {
  const config = {
    temp,
    humidity,
    speed,
    units: {
      temp: 'c',
      speed: 'kph',
    },
  };
  return new Feels(config).toC().like() as number;
}

function convertResponse(raw: LocationApiResponse): CityForecast['data'] {
  const {location, current_observation: curr, forecasts} = raw;
  const wind = curr.wind.speed;
  const humidity = curr.atmosphere.humidity;
  const temperature = curr.condition.temperature;
  const feelsLike = getFeelsLike(temperature, humidity, wind);
  return {
    temperature,
    woeid: location?.woeid,
    city: location?.city,
    region: location?.region,
    country: location.country,
    humidity,
    wind,
    feelsLike,
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
  get(woeid: number, isCapital?: boolean): void;
  search(term: string): void;
};

const useCapitalActions = (): CapitalActions => {
  const dispatch = useDispatch<Dispatch<ActionData>>();
  const actions = {
    async get(woeid: number, isCapital = false) {
      dispatch({type: TYPES.FETCH_LOCATION, payload: {woeid}});
      try {
        const resp = await get({woeid});
        const locationForecast = convertResponse(resp);
        dispatch({
          type: TYPES.FETCH_LOCATION_SUCCESS,
          payload: {...locationForecast, isCapital},
        });
      } catch (e) {
        e.woeid = woeid;
        dispatch({type: TYPES.FETCH_LOCATION_ERROR, payload: e});
      }
    },
    async search(term: string) {
      if (!term.trim()) {
        return dispatch({type: TYPES.REMOVE_LOCATION, payload: {woeid: -1}});
      }
      dispatch({type: TYPES.FETCH_LOCATION, payload: {woeid: -1}});
      try {
        const resp = await get({location: term});
        const locationForecast = convertResponse(resp);
        dispatch({
          type: TYPES.FETCH_LOCATION_SUCCESS,
          payload: {...locationForecast, woeid: -1},
        });
      } catch (e) {
        e.woeid = -1;
        dispatch({type: TYPES.FETCH_LOCATION_ERROR, payload: e});
      }
    },
  };
  return useMemo(() => actions, [dispatch]);
};

export default useCapitalActions;
