import React from 'react';

const Card = () => (
	<div className="card">
		<div className="card__content">
			<span className="card__close">{'X'}</span>
				<div className="card-weather">
					<span className="card-weather__capital">{'Niterói - RJ'}</span>
					<h2 className="card-weather__temperature">{'20°C Nublado'}</h2>

					<div className="weather-description">
						<ul className="weather-details__col-1">
							<li>
								<span className="weather-number-first">
									<i className="fa fa-arrow-down weather-details__icon" aria-hidden="true"></i>
									{'16°'}
								</span>
								<span className="weather-number-second">
									<i className="fa fa-arrow-down weather-details__icon" aria-hidden="true"></i>
									{'25°'}
								</span>
							</li>
							<li> <span className="weather-details__humidity">{'Humidade'}</span> {'89%'}</li>
						</ul>

						<ul className="weather-details__col-2">
							<li><span className="weather-details__sensation">{'Sensação'} </span>{'19°C'}</li>
							<li><span className="weather-details__wind">{'Vento'} </span>{'18Km/h'}</li>
						</ul>
					</div>
				</div>
				<div className="card-weather__division"></div>
				<ul className="temperature-days">
					<li><span>{'Terça'}</span></li>
					<li><span>{'Quarta'}</span></li>
					<li><span>{'Quinta'}</span></li>
					<li><span>{'Sexta'}</span></li>
					<li><span>{'Sábado'}</span></li>
				</ul>
				<ul className="temperature-numbers">
					<li><span>{'18° 26°'}</span></li>
					<li><span>{'18° 28°'}</span></li>
					<li><span>{'19° 30°'}</span></li>
					<li><span>{'23° 35°'}</span></li>
					<li><span>{'23° 37°'}</span></li>
				</ul>
		</div>
  </div>
);

export default Card;
