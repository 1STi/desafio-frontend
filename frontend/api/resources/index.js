import Weather from './Weather';

const Rest = Api => {
	return {
		Weather: Weather(Api)
	}
};

export default Rest;
