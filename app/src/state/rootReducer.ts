import {combineReducers} from 'redux';

import capitalsReducer, {CapitalState} from './capitals/capitalsReducer';
import {DefaultRootState} from 'react-redux';

declare module 'react-redux' {
  interface DefaultRootState {
    capitals: CapitalState;
  }
}
const rootReducer = combineReducers({
  capitals: capitalsReducer,
});

export default rootReducer;
