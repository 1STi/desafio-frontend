import * as ACTIONS from 'root/constants/weather';
import Axios from 'axios';

export const getAllCities = cities => {
	return {
		type: ACTIONS.REQUEST_ALL_CITIES,
		cities
	}
};

export const getSingleCity = city => {
	return {
		type: ACTIONS.REQUEST_SINGLE_CITY,
		city
	}
};

export const getParalelalCities = cities => {
	return dispatch => {
		return Axios.all(cities)
						.then(response => {
							dispatch(getAllCities(response));
							return response;
						})
	}
};
