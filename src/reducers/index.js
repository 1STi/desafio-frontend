import { combineReducers } from 'redux';
import { REQUEST_WEATHER, 
		 RECEIVE_WEATHER_SUCCESS,
		 RECEIVE_WEATHER_FAILURE,
		 CLOSE_CARD, 
		 REQUEST_LIST_WEATHER,
		 RECEIVE_LIST_WEATHER_SUCCESS,
		 RECEIVE_LIST_WEATHER_FAILURE } from '../actions/index';

function card(state = {
	isFetching: false,
	error: false,
	visible: false,
	weather: {}
}, action) {
	switch(action.type) {
		case REQUEST_WEATHER:
			return {
				...state,
				isFetching: true,
				error: false
			};
			break;
		case RECEIVE_WEATHER_SUCCESS:
			return {
				...state,
				isFetching: false,
				weather: action.payload,
				visible: true
			};
			break;
		case RECEIVE_WEATHER_FAILURE:
			return {
				...state,
				isFetching: false,
				error: 'Search not found!'
			};
			break;
		case CLOSE_CARD:
			return {
				...state,
				visible: false
			};
			break;
	}
	return state;
}

function list(state = {
	isFetching: false,
	error: false,
	capitals: []
}, action) {
	switch(action.type) {
		case REQUEST_LIST_WEATHER:
			return {
				...state,
				isFetching: true,
				error: false
			};
			break;
		case RECEIVE_LIST_WEATHER_SUCCESS:
			return {
				...state,
				isFetching: false,
				capitals: action.payload
			};
			break;
		case RECEIVE_LIST_WEATHER_FAILURE:
			return {
				...state,
				isFetching: false,
				error: 'Search not found!'
			};
			break;
	}
	return state;
}

const rootReducer = combineReducers({
  card,
  list
});

export default rootReducer;
