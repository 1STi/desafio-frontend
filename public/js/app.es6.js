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
class View {
	constructor(element) {
		this._element = element;
	}

	template() {
		throw new Error("O método template precisa ser implementado");
	}

	update(model) {
		this._element.innerHTML = this.template(model);
	}
}
class CapitalsView extends View {

	constructor(element) {
		super(element);
	}

	template(model) {

		if(model.status > 200) {
			return `
				<div style="text-align: center; font-size: 1.5em; margin-top: 30px; color: red">
					<h5>${model.status} - ${model.message}</5>
				</div>
			`;
		}

		let tbody = '';
		for(let i = 0; i < model.length; i++) {
			tbody += `
				<tr class="capital__btn" onclick="weatherController.loadCard(event, ${i})">
					<td>${model[i].forecast[0].low}°</td>
					<td>${model[i].forecast[0].high}°</td>
					<td>${model[i].location.name}</td>
				</tr>
			`;
		}
		let table = `
			<table class="capitals__table">
				<thead>
					<tr>
						<th>Min</th>
						<th>Máx</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					${tbody}
				</tbody>
			</table>
		`;

		if(model.length > 6)
			table += table;

		return table;
	}
}
class CardView extends View {

	constructor(element) {
		super(element);
	}

	template(model) {

		if(model.status > 200) {
			return `
				<div class="card">

					<button class="btn card__btn--into-right" type="button" onclick="weatherController.closeCard()">
						<div class="icon icon--close">close</div>
					</button>

					<div class="card__details">
						<h5>${model.status}</h5>

						<div class="card__details--now">
							<p>${model.message}</p>
						</div>
					</div>
				</div>
			`;
		}

		return `
			<div class="card">

				<button class="btn card__btn--into-right" type="button" onclick="weatherController.closeCard()">
					<div class="icon icon--close">close</div>
				</button>

				<div class="card__details">
					<h5>${model.location.name}, ${model.location.region} - ${model.location.country}</h5>

					<div class="card__details--now">
						<p>${model.forecast[0].now}°C ${model.forecast[0].text}</p>
					</div>

					<div class="col--40">
						<ul class="list--inline">
							<li class="icon icon--arrow-down">down</li>
							<li style="margin-right: 1ch;">${model.forecast[0].low}°</li>
							<li class="icon icon--arrow-up">up</li>
							<li>${model.forecast[0].high}°</li>
						</ul>
					</div>

					<div class="col--60">
						<p><span>Sensação</span> ${model.forecast[0].sensation}°</p>
					</div>

					<div class="col--40">
						<p><span>Vento</span> ${model.wind}km/h</p>
					</div>

					<div class="col--60">
						<p><span>Humidade</span> ${model.humidity}%</p>
					</div>
				</div>

				<div class="card__days">
					<div class="col--25">
						<p>${model.forecast[1].day}</p>
						<p class="card__days--forecast">
							${model.forecast[1].low}° ${model.forecast[1].high}°
						</p>
					</div>

					<div class="col--25">
						<p>${model.forecast[2].day}</p>
						<p class="card__days--forecast">
							${model.forecast[2].low}° ${model.forecast[2].high}°
						</p>
					</div>

					<div class="col--25">
						<p>${model.forecast[3].day}</p>
						<p class="card__days--forecast">
							${model.forecast[3].low}° ${model.forecast[3].high}°
						</p>
					</div>

					<div class="col--25">
						<p>${model.forecast[4].day}</p>
						<p class="card__days--forecast">
							${model.forecast[4].low}° ${model.forecast[4].high}°
						</p>
					</div>
				</div>
					
			</div>
		`;
	}
}
let $ = document.querySelector.bind(document);

class WeatherController {

	constructor() {

		this._capitalsData = [];

		this._weatherService = new WeatherService();

		this._form = $(".form");
		this._loaderTraces = $(".loader--traces");
		this._loaderCircle = $(".loader--circle");
		this._inputSearch = $(".form__input");
		this._headerTitle = $(".header__title");
		this._cardView = new CardView($("#card__view"));
		this._capitalsView = new CapitalsView($("#capitals__view"));

		this._loadCapitals();
	}

	closeCard() {
		$(".card").style.display = "none";
		this._changeAroundCard("header__title--sm", "header__title--lg", "50px");
	}

	loadCard(e, index=-1) {
		e.preventDefault();

		if(index > -1) {
			this._cardView.update(this._capitalsData[index]);
			this._changeAroundCard("header__title--lg", "header__title--sm", "20px");
		}else {
			this._loaderTraces.style.display = "block";
			this._weatherService.find(this._inputSearch.value, (err, data) => {
				this._loaderTraces.style.display = "none";
				this._changeAroundCard("header__title--lg", "header__title--sm", "20px");
				if(err) return this._cardView.update(err);
				this._cardView.update(new DataHelper(data).data());
			});
		}
	}

	_changeAroundCard(remove, add, margin) {
		if(this._headerTitle.classList.contains(remove)) 
			this._headerTitle.classList.remove(remove);

		if(!this._headerTitle.classList.contains(add))
			this._headerTitle.classList.add(add);

		this._form.style.marginBottom = margin;
		this._inputSearch.value = '';
	}

	_loadCapitals(index=0) {

		let capitals = [
			"Porto Alegre", "Rio de Janeiro", "Sao Paulo",
			"Belo Horizonte", "Brasilia", "Belem", "Salvador",
			"Curitiba", "Fortaleza", "Manaus", "Joao Pessoa"
		];

		if(capitals.length == this._capitalsData.length) {
			return this._loaderCircle.style.display = "none";
		}
			
		this._weatherService.find(capitals[index], (err, data) => {

			if(err) 
				return this._capitalsView.update(err);

			this._capitalsData.push(new DataHelper(data).data());
			this._capitalsView.update(this._capitalsData);
			this._loadCapitals(index + 1);
		}, true);
	}
}

let weatherController = new WeatherController();