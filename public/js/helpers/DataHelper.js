class DataHelper {

	constructor(data) {
		this._data = data;
	}

	data() {
		let forecast = [];
		for(let i = 0; i < 5; i++) {
			forecast.push({
				low: this._toCelsius(this._data.item.forecast[i].low),
				high: this._toCelsius(this._data.item.forecast[i].high),
				day: this._weekDay(this._data.item.forecast[i].day),
				text: this._codeCondition(this._data.item.forecast[i].code)
			})
		}
		forecast[0].now = this._toCelsius(this._data.item.condition.temp);
		forecast[0].text = this._codeCondition(this._data.item.condition.code);
		forecast[0].sensation = parseInt((forecast[0].low + forecast[0].high) / 2);

		return {
			status: this._data.status,
			location: {
				name: this._data.location.city,
				region: this._data.location.region,
				country: this._traduction(this._data.location.country)
			},
			wind: this._toKmh(this._data.wind.speed),
			humidity: this._data.atmosphere.humidity,
			forecast: forecast
		};
	}

	_toCelsius(f) {
		return parseInt((f - 32) / 1.8);
	}

	_toKmh(mph) {
		return parseInt(mph * 1.609344);
	}

	_codeCondition(code) {

		let conditions = {
			0: "Tornado",
			1: "Tempestade",
			2: "Furacão",
			3: "Trovoada",
			4: "Trovoada",
			5: "Chuva e Neve",
			6: "Chuva",
			7: "Chuva e Neve",
			8: "Chuva",
			9: "Chuva",
			10: "Chuva",
			11: "Chuva",
			12: "Chuva",
			13: "Neve",
			14: "Neve",
			15: "Neve",
			16: "Neve",
			17: "Granizo",
			18: "Chuva",
			19: "Poeira",
			20: "Nevoento",
			21: "Neblina",
			22: "Enfumaçado",
			23: "Tempestuoso",
			24: "Ventoso",
			25: "Frio",
			26: "Nublado",
			27: "Nublado",
			28: "Nublado",
			29: "Nublado",
			30: "Nublado",
			31: "Limpo",
			32: "Ensolarado",
			33: "Bom",
			34: "Bom",
			35: "Chuva e Granizo",
			36: "Quente",
			37: "Trovoada",
			38: "Trovoada",
			39: "Trovoada",
			40: "Chuva",
			41: "Neve",
			42: "Neve",
			43: "Neve",
			44: "Nublado",
			45: "Trovoada",
			46: "Neve",
			47: "Trovoada",
			3200: "Não avaliado"
		};

		return conditions[code];
	}

	_weekDay(day) {

		let week = {
			mon: "Segunda",
			tue: "Terça",
			wed: "Quarta",
			thu: "Quinta",
			fri: "Sexta",
			sat: "Sábado",
			sun: "Domingo"
		};

		return week[day.toLowerCase()];
	}

	_traduction(word) {

		let words = {
			brazil: "Brasil"
		};

		return words[word.toLowerCase()] || word;
	}
}