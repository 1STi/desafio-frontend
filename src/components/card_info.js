import React from 'react';

const CardInfo = ({weather}) => {
	return (
		<div>
			<p className="card__heading">{weather.city}, {weather.region} - {weather.country}</p>
			<p className="card__weather-condition">{weather.temp}°C {weather.condition}</p>
			<div className="row card__row">
				<div className="col-sm-2 col-xs-3">
					<p><i className="fa fa-arrow-up" aria-hidden="true"></i> {weather.maxTemp}°</p>
				</div>
				<div className="col-sm-2 col-xs-3">
					<p><i className="fa fa-arrow-down" aria-hidden="true"></i> {weather.minTemp}°</p>
				</div>
				<div className="col-sm-4 col-xs-6">
					<p><span className="card__row__label">Sensação</span> -</p>
				</div>
			</div>		

			<div className="row card__row">
				<div className="col-sm-4 col-xs-6">
					<p><span className="card__row__label">Vento</span> {weather.windSpeed}km/h</p>
				</div>
				<div className="col-sm-4 col-xs-6">
					<p><span className="card__row__label">Humidade</span> {weather.humidity}%</p>
				</div>
			</div>	
		</div>
	);
}

export default CardInfo;
