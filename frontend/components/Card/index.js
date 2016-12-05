import React from 'react';

const Card = props => {
	const days = {
	 'Sun': 'Domingo',
	 'Mon': 'Segunda',
	 'Tue': 'Terça',
	 'Wed': 'Quarta',
	 'Thu': 'Quinta',
	 'Fri': 'Sexta',
	 'Sat': 'Sábado'
	};
	let weekNames = null;
	let weekTemperatures = null;
	if (props.city && props.city.temperatureOfWeek) {
		weekNames = props.city.temperatureOfWeek.map((item, index) => {
			return (
				(<li key={index}><span>{`${days[item.day]}`}</span></li>)
			);
		});
		weekTemperatures = props.city.temperatureOfWeek.map((item, index) => {
			return (
				(<li key={index}><span>{`${item.low}° ${item.high}°`}</span></li>)
			);
		});
	}

	return (
		<div className={`card ${props.toggleCard}`}>
		  {props.city ?
				<div className="card__content">
					<span className="card__close" onClick={props.onCloseCard}>{'X'}</span>
						<div className="card-weather">
							<span className="card-weather__capital">
								{`${props.city.location.city} - ${props.city.location.region} - ${props.city.location.country}`}
								</span>
							<h2 className="card-weather__temperature">{`${parseInt(props.city.temperatureToday).toPrecision(2)}°C Nublado`}</h2>
							<div className="weather-description">
								<ul className="weather-details__col-1">
									<li>
										<span className="weather-number-first">
											<i className="fa fa-arrow-down weather-details__icon" aria-hidden="true"></i>
											{`${props.city.forecast[0].low} °C`}
										</span>
										<span className="weather-number-second">
											<i className="fa fa-arrow-down weather-details__icon" aria-hidden="true"></i>
											{`${props.city.forecast[0].high} °C`}
										</span>
									</li>
									<li> <span className="weather-details__humidity">{'Humidade '}</span>{`${props.city.humidity}%`}</li>
								</ul>
								<ul className="weather-details__col-2">
									<li><span className="weather-details__sensation">{'Sensação '}</span>{'-'}</li>
									<li>
										<span className="weather-details__wind">{'Vento '}</span>
										{`${parseInt(props.city.wind).toPrecision(2)} Km/h`}
									</li>
								</ul>
							</div>
						</div>
						<div className="card-weather__division"></div>
						<ul className="temperature-days">
							{weekNames}
						</ul>
						<ul className="temperature-numbers">
							{weekTemperatures}
						</ul>
				</div>
				: <span>{'Pesquisando...'}</span>
			}
		  </div>
	);
};

export default Card;
