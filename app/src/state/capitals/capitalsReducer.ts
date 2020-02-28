import {ActionData, LocationForecast} from '../common';
import {CityForecast, TYPES} from './useCapitalsActions';

export interface CapitalState {
  locations: {[woeid: string]: CityForecast};
}

export const INITIAL_STATE: CapitalState = {
  locations: {},
};

const capitalsReducer = (
  state = INITIAL_STATE,
  {type, payload}: ActionData,
): CapitalState => {
  switch (type) {
    //GET FAVORITES
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
          [payload.location.woeid]: {
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
