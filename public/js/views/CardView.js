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