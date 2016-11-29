import * as ACTIONS from 'root/constants/weather';

const initialState = {
  items: [],
};

function weather(state = initialState, action) {
  switch(action.type) {
    case ACTIONS.RECEIVE_WEATHERS: { 
      return { state };
    };
    default: {
      return state;
    };
  }
}

export default weather;
