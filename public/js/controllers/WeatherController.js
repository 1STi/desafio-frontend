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