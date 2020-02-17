import {
  getForecastWeatherByCity,
  getCurrentWeatherByCity
} from "../../services/api";

const TYPES = {
  REQUEST: "WEATHER_REQUEST",
  SUCCESS: "WEATHER_SUCCESSS",
  ERROR: "WEATHER_ERROR",
  SUCCESS_CURRENT_DATA: "SUCCESS_CURRENT_DATA",
  REMOVE_CURRENT: "REMOVE_CURRENT"
};

const initial_state = {
  data: [],
  current: {},
  error: "",
  loading: 0
};

const weatherReducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST:
      return { ...state, loading: state.loading + 1, error: "" };
    case TYPES.SUCCESS:
      return { ...state, data: action.payload, loading: state.loading - 1 };
    case TYPES.SUCCESS_CURRENT_DATA:
      return { ...state, current: action.payload, loading: state.loading - 1 };
    case TYPES.ERROR:
      return { ...state, error: action.payload, loading: state.loading - 1 };
    case TYPES.REMOVE_CURRENT:
      return { ...state, current: {}, error: "" };
    default:
      return state;
  }
};

export const requestForecastWeatherByCity = city => async dispatch => {
  dispatch({
    type: TYPES.REQUEST
  });
  try {
    const response = await getForecastWeatherByCity(city);
    dispatch({
      type: TYPES.SUCCESS,
      payload: response
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR,
      payload: "Cidade não encontrada"
    });
  }
};

export const requestCurrentWeatherByCity = city => async dispatch => {
  dispatch({
    type: TYPES.REQUEST
  });
  try {
    const response = await getCurrentWeatherByCity(city);
    dispatch({
      type: TYPES.SUCCESS_CURRENT_DATA,
      payload: response
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR,
      payload: "Cidade não encontrada"
    });
  }
};
export const removeCurrentWeather = () => ({
  type: TYPES.REMOVE_CURRENT
});

export default weatherReducer;
