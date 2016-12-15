import axios from 'axios';
import { capitals } from '../utils/constants';
import { code_condition, week_days } from '../utils/translate';
import { convertFtoC, convertMPHtoKMH } from '../utils/convert';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER_SUCCESS = 'RECEIVE_WEATHER_SUCCESS';
export const RECEIVE_WEATHER_FAILURE = 'RECEIVE_WEATHER_FAILURE';
export const CLOSE_CARD = 'CLOSE_CARD';

export const REQUEST_LIST_WEATHER = 'REQUEST_LIST_WEATHER';
export const RECEIVE_LIST_WEATHER_SUCCESS = 'RECEIVE_LIST_WEATHER_SUCCESS';
export const RECEIVE_LIST_WEATHER_FAILURE = 'RECEIVE_LIST_WEATHER_FAILURE';

const weekForecastInfo = (forecast) => {
	return forecast.filter( (elem, index) => {
		return ((index > 0) && (index < 6)) 
	}).map((elem) => {
		return {
			day: week_days[elem.day], 
			high: convertFtoC(elem.high),
			low: convertFtoC(elem.low)
		}
	})
}

const getWeatherData = (data) => {
	return {
		temp: convertFtoC(data.item.condition.temp),
		city: data.location.city,
		region: data.location.region,
		country: data.location.country,
		maxTemp: convertFtoC(data.item.forecast[0].high),  
		minTemp: convertFtoC(data.item.forecast[0].low),
		humidity: data.atmosphere.humidity,
		windSpeed: convertMPHtoKMH(data.wind.speed),
		condition: code_condition[data.item.condition.code],
		weekForecast: weekForecastInfo(data.item.forecast),
	}
}

export function requestWeather() {
	return {
		type: REQUEST_WEATHER
	}
}

export function fetchWeather(city) {
	const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

	return function(dispatch) {
		dispatch(requestWeather());

		return axios.get(url)
			.then(response => {
				if(response.data.query.results)
					dispatch(receiveWeatherSuccess(getWeatherData(response.data.query.results.channel)))
				else
					dispatch(receiveWeatherFailure())	
			}); 
	}
}

export function receiveWeatherSuccess(data) {
	return {
		type: RECEIVE_WEATHER_SUCCESS,
		payload: data
	}
}

export function receiveWeatherFailure(data) {
	return {
		type: RECEIVE_WEATHER_FAILURE,
	}
}

export function closeCard() {
	return {
		type: CLOSE_CARD
	}
}

const getListWeatherData = (result) => {
	return result.map(elem => {
		return {
			name: elem.location.city,
			minTemp: convertFtoC(elem.item.forecast[0].low),
			maxTemp: convertFtoC(elem.item.forecast[0].high)
		}
	});

}

export function requestListWeather() {
	return {
		type: REQUEST_LIST_WEATHER
	}
}

export function fetchListWeather() {
	const YQL_query = capitals.map(capital => {
		return ` text="${capital}"`
	}).join(' or ');

	const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20${YQL_query})&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
	
	return function(dispatch) {
		dispatch(requestListWeather());

		return axios.get(url)
			.then(response => {
				let listWeather = response.data.query.results;
				console.log("Response list: ", listWeather)

				if(listWeather == null)
					dispatch(receiveListWeatherFailure())
				else if(listWeather.channel.length > 1)
					dispatch(receiveListWeatherSuccess(getListWeatherData(listWeather.channel)))
				else
					dispatch(receiveListWeatherSuccess(getListWeatherData([listWeather.channel])))
						
			}); 
	}
}

export function receiveListWeatherSuccess(data) {
	return {
		type: RECEIVE_LIST_WEATHER_SUCCESS,
		payload: data
	}
}

export function receiveListWeatherFailure(data) {
	return {
		type: RECEIVE_LIST_WEATHER_FAILURE,
	}
}