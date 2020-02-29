import {ActionData, LocationForecast} from '../common';
import {CityForecast, TYPES} from './useCapitalsActions';

export interface CapitalState {
  locations: {[woeid: string]: CityForecast};
  search: CityForecast;
}

export const INITIAL_STATE: CapitalState = {
  locations: {},
  search: {
    isCapital: false,
    isLoading: false,
    data: undefined,
    error: undefined,
  },
};

const capitalsReducer = (
  state = INITIAL_STATE,
  {type, payload}: ActionData,
): CapitalState => {
  switch (type) {
    case TYPES.REMOVE_LOCATION:
      return {
        ...state,
        locations: {
          ...state.locations,
          [payload.woeid]: undefined,
        },
      };
    case TYPES.FETCH_LOCATION:
      return {
        ...state,
        locations: {
          ...state.locations,
          [payload.woeid]: {isCapital: payload.isCapital, isLoading: true},
        },
      };
    case TYPES.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        locations: {
          ...state.locations,
          [payload.woeid]: {
            isLoading: false,
            error: undefined,
            data: payload,
          },
        },
      };
    case TYPES.FETCH_LOCATION_ERROR:
      return {
        ...state,
        locations: {
          ...state.locations,
          [payload.woeid]: {
            isLoading: false,
            error: payload,
          },
        },
      };
    default:
      return state;
  }
};
export default capitalsReducer;
