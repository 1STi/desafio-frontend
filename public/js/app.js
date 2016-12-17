"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataHelper = function () {
	function DataHelper(data) {
		_classCallCheck(this, DataHelper);

		this._data = data;
	}

	_createClass(DataHelper, [{
		key: "data",
		value: function data() {
			var forecast = [];
			for (var i = 0; i < 5; i++) {
				forecast.push({
					low: this._toCelsius(this._data.item.forecast[i].low),
					high: this._toCelsius(this._data.item.forecast[i].high),
					day: this._weekDay(this._data.item.forecast[i].day),
					text: this._codeCondition(this._data.item.forecast[i].code)
				});
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
	}, {
		key: "_toCelsius",
		value: function _toCelsius(f) {
			return parseInt((f - 32) / 1.8);
		}
	}, {
		key: "_toKmh",
		value: function _toKmh(mph) {
			return parseInt(mph * 1.609344);
		}
	}, {
		key: "_codeCondition",
		value: function _codeCondition(code) {

			var conditions = {
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
	}, {
		key: "_weekDay",
		value: function _weekDay(day) {

			var week = {
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
	}, {
		key: "_traduction",
		value: function _traduction(word) {

			var words = {
				brazil: "Brasil"
			};

			return words[word.toLowerCase()] || word;
		}
	}]);

	return DataHelper;
}();

var WeatherService = function () {
	function WeatherService() {
		_classCallCheck(this, WeatherService);
	}

	_createClass(WeatherService, [{
		key: "find",
		value: function find(value, cb) {
			var _this = this;

			var isRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
			var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;


			if (!isRight && count >= 3) {
				return cb({
					status: 404,
					message: "Não encontrado"
				});
			}

			axios.get(this._url(value)).then(function (resp) {
				try {
					var data = resp.data.query.results.channel;
					data.status = 200;
					cb(null, data);
				} catch (e) {
					_this.find(value, cb, isRight, count + 1);
				}
			}).catch(function (err) {
				cb({
					status: err.status || 500,
					message: "Erro inesperado"
				});
			});
		}
	}, {
		key: "_url",
		value: function _url(value) {
			var woeid = "select woeid from geo.places(1) where text=\"" + value + "\"";
			var forecast = "select * from weather.forecast where woeid in (" + woeid + ")";

			return "https://query.yahooapis.com/v1/public/yql?q=" + forecast + "&format=json";
		}
	}]);

	return WeatherService;
}();

var View = function () {
	function View(element) {
		_classCallCheck(this, View);

		this._element = element;
	}

	_createClass(View, [{
		key: "template",
		value: function template() {
			throw new Error("O método template precisa ser implementado");
		}
	}, {
		key: "update",
		value: function update(model) {
			this._element.innerHTML = this.template(model);
		}
	}]);

	return View;
}();

var CapitalsView = function (_View) {
	_inherits(CapitalsView, _View);

	function CapitalsView(element) {
		_classCallCheck(this, CapitalsView);

		return _possibleConstructorReturn(this, (CapitalsView.__proto__ || Object.getPrototypeOf(CapitalsView)).call(this, element));
	}

	_createClass(CapitalsView, [{
		key: "template",
		value: function template(model) {

			if (model.status > 200) {
				return "\n\t\t\t\t<div style=\"text-align: center; font-size: 1.5em; margin-top: 30px; color: red\">\n\t\t\t\t\t<h5>" + model.status + " - " + model.message + "</5>\n\t\t\t\t</div>\n\t\t\t";
			}

			var tbody = '';
			for (var i = 0; i < model.length; i++) {
				tbody += "\n\t\t\t\t<tr class=\"capital__btn\" onclick=\"weatherController.loadCard(event, " + i + ")\">\n\t\t\t\t\t<td>" + model[i].forecast[0].low + "\xB0</td>\n\t\t\t\t\t<td>" + model[i].forecast[0].high + "\xB0</td>\n\t\t\t\t\t<td>" + model[i].location.name + "</td>\n\t\t\t\t</tr>\n\t\t\t";
			}
			var table = "\n\t\t\t<table class=\"capitals__table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Min</th>\n\t\t\t\t\t\t<th>M\xE1x</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t" + tbody + "\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t";

			if (model.length > 6) table += table;

			return table;
		}
	}]);

	return CapitalsView;
}(View);

var CardView = function (_View2) {
	_inherits(CardView, _View2);

	function CardView(element) {
		_classCallCheck(this, CardView);

		return _possibleConstructorReturn(this, (CardView.__proto__ || Object.getPrototypeOf(CardView)).call(this, element));
	}

	_createClass(CardView, [{
		key: "template",
		value: function template(model) {

			if (model.status > 200) {
				return "\n\t\t\t\t<div class=\"card\">\n\n\t\t\t\t\t<button class=\"btn card__btn--into-right\" type=\"button\" onclick=\"weatherController.closeCard()\">\n\t\t\t\t\t\t<div class=\"icon icon--close\">close</div>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<div class=\"card__details\">\n\t\t\t\t\t\t<h5>" + model.status + "</h5>\n\n\t\t\t\t\t\t<div class=\"card__details--now\">\n\t\t\t\t\t\t\t<p>" + model.message + "</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t";
			}

			return "\n\t\t\t<div class=\"card\">\n\n\t\t\t\t<button class=\"btn card__btn--into-right\" type=\"button\" onclick=\"weatherController.closeCard()\">\n\t\t\t\t\t<div class=\"icon icon--close\">close</div>\n\t\t\t\t</button>\n\n\t\t\t\t<div class=\"card__details\">\n\t\t\t\t\t<h5>" + model.location.name + ", " + model.location.region + " - " + model.location.country + "</h5>\n\n\t\t\t\t\t<div class=\"card__details--now\">\n\t\t\t\t\t\t<p>" + model.forecast[0].now + "\xB0C " + model.forecast[0].text + "</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col--40\">\n\t\t\t\t\t\t<ul class=\"list--inline\">\n\t\t\t\t\t\t\t<li class=\"icon icon--arrow-down\">down</li>\n\t\t\t\t\t\t\t<li style=\"margin-right: 1ch;\">" + model.forecast[0].low + "\xB0</li>\n\t\t\t\t\t\t\t<li class=\"icon icon--arrow-up\">up</li>\n\t\t\t\t\t\t\t<li>" + model.forecast[0].high + "\xB0</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col--60\">\n\t\t\t\t\t\t<p><span>Sensa\xE7\xE3o</span> " + model.forecast[0].sensation + "\xB0</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col--40\">\n\t\t\t\t\t\t<p><span>Vento</span> " + model.wind + "km/h</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col--60\">\n\t\t\t\t\t\t<p><span>Humidade</span> " + model.humidity + "%</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"card__days\">\n\t\t\t\t\t<div class=\"col--25\">\n\t\t\t\t\t\t<p>" + model.forecast[1].day + "</p>\n\t\t\t\t\t\t<p class=\"card__days--forecast\">\n\t\t\t\t\t\t\t" + model.forecast[1].low + "\xB0 " + model.forecast[1].high + "\xB0\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col--25\">\n\t\t\t\t\t\t<p>" + model.forecast[2].day + "</p>\n\t\t\t\t\t\t<p class=\"card__days--forecast\">\n\t\t\t\t\t\t\t" + model.forecast[2].low + "\xB0 " + model.forecast[2].high + "\xB0\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col--25\">\n\t\t\t\t\t\t<p>" + model.forecast[3].day + "</p>\n\t\t\t\t\t\t<p class=\"card__days--forecast\">\n\t\t\t\t\t\t\t" + model.forecast[3].low + "\xB0 " + model.forecast[3].high + "\xB0\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col--25\">\n\t\t\t\t\t\t<p>" + model.forecast[4].day + "</p>\n\t\t\t\t\t\t<p class=\"card__days--forecast\">\n\t\t\t\t\t\t\t" + model.forecast[4].low + "\xB0 " + model.forecast[4].high + "\xB0\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t</div>\n\t\t";
		}
	}]);

	return CardView;
}(View);

var $ = document.querySelector.bind(document);

var WeatherController = function () {
	function WeatherController() {
		_classCallCheck(this, WeatherController);

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

	_createClass(WeatherController, [{
		key: "closeCard",
		value: function closeCard() {
			$(".card").style.display = "none";
			this._changeAroundCard("header__title--sm", "header__title--lg", "50px");
		}
	}, {
		key: "loadCard",
		value: function loadCard(e) {
			var _this4 = this;

			var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

			e.preventDefault();

			if (index > -1) {
				this._cardView.update(this._capitalsData[index]);
				this._changeAroundCard("header__title--lg", "header__title--sm", "20px");
			} else {
				this._loaderTraces.style.display = "block";
				this._weatherService.find(this._inputSearch.value, function (err, data) {
					_this4._loaderTraces.style.display = "none";
					_this4._changeAroundCard("header__title--lg", "header__title--sm", "20px");
					if (err) return _this4._cardView.update(err);
					_this4._cardView.update(new DataHelper(data).data());
				});
			}
		}
	}, {
		key: "_changeAroundCard",
		value: function _changeAroundCard(remove, add, margin) {
			if (this._headerTitle.classList.contains(remove)) this._headerTitle.classList.remove(remove);

			if (!this._headerTitle.classList.contains(add)) this._headerTitle.classList.add(add);

			this._form.style.marginBottom = margin;
			this._inputSearch.value = '';
		}
	}, {
		key: "_loadCapitals",
		value: function _loadCapitals() {
			var _this5 = this;

			var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;


			var capitals = ["Porto Alegre", "Rio de Janeiro", "Sao Paulo", "Belo Horizonte", "Brasilia", "Belem", "Salvador", "Curitiba", "Fortaleza", "Manaus", "Joao Pessoa"];

			if (capitals.length == this._capitalsData.length) {
				return this._loaderCircle.style.display = "none";
			}

			this._weatherService.find(capitals[index], function (err, data) {

				if (err) return _this5._capitalsView.update(err);

				_this5._capitalsData.push(new DataHelper(data).data());
				_this5._capitalsView.update(_this5._capitalsData);
				_this5._loadCapitals(index + 1);
			}, true);
		}
	}]);

	return WeatherController;
}();

var weatherController = new WeatherController();
