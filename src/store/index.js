import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

/* PLOP_DUCKS_IMPORT */
import weatherCapital from "./ducks/WeatherCapital";
import weather from "./ducks/Weather";

const rootReducer = combineReducers({
  /* PLOP_COMBINE_IMPORT */
  weatherCapital,
  weather
});

const middleware = [thunk];
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };
