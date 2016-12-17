class WeatherService {

	find(value, cb, isRight=false, count=0) {

		if(!isRight && count >= 3) {
			return cb({
				status: 404,
				message: "Não encontrado"
			})
		}

		axios.get(this._url(value))
		.then(resp => {
			try {
				let data = resp.data.query.results.channel;
				data.status = 200;
				cb(null, data);
			}catch(e) {
				this.find(value, cb, isRight, count + 1);
			}
		})
		.catch(err => {
			cb({
				status: err.status || 500,
				message: "Erro inesperado"
			});
		})
	}

	_url(value) {
		let woeid = `select woeid from geo.places(1) where text="${value}"`;
		let forecast = `select * from weather.forecast where woeid in (${woeid})`;
		
		return `https://query.yahooapis.com/v1/public/yql?q=${forecast}&format=json`;
	}
}