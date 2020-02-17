import { getWeatherCapital } from "../../services/api";

const TYPES = {
  REQUEST: "WEATHERCAPITAL_REQUEST",
  SUCCESS: "WEATHERCAPITAL_SUCCESSS",
  ERROR: "WEATHERCAPITAL_ERROR"
};

const initial_state = {
  data: [],
  error: "",
  loading: false
};

const weathercapitalReducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST:
      return { ...state, loading: true };
    case TYPES.SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case TYPES.ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const requestWeatherCapital = () => async dispatch => {
  dispatch({
    type: TYPES.REQUEST
  });
  try {
    const response = await getWeatherCapital();
    dispatch({
      type: TYPES.SUCCESS,
      payload: response
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR
    });
  }
};

export default weathercapitalReducer;
