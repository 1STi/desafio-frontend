import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import weather from './weather';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  weather
});

export default rootReducer;
