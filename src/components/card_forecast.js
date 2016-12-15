import React from 'react';

const CardForecast = ({weekForecast}) => {
	return (
		<div className="row card__week-forecast">
		 	<div className="col-sm-5 col-xs-6">
		        <div className="row">
		          	<div className="col-sm-6 col-xs-6 card__day-forecast">
		          		<div className="row">
		          			<div className="card__forecast__day col-sm-6 col-xs-6">
			          			{weekForecast[0].day}
			          		</div>
		          		</div>
		          	
		          		<div className="row">
			          		<div className="card__forecast__temp col-sm-3 col-xs-3">
			          			{weekForecast[0].low}°
			          		</div>
			          		<div className="card__forecast__temp col-sm-3 col-xs-3">
			          			{weekForecast[0].high}°
			          		</div>
			          	</div>
		          	</div>

		          	<div className="col-sm-6 col-xs-6 card__day-forecast">
		          		<div className="row">
			          		<div className="card__forecast__day col-sm-6 col-xs-6">
			          			{weekForecast[1].day}
			          		</div>
			          	</div>
		          	
		          		<div className="row">
			          		<div className="card__forecast__temp col-sm-3 col-xs-3">
			          			{weekForecast[1].low}°
			          		</div>
			          		<div className="card__forecast__temp col-sm-3 col-xs-3">
			          			{weekForecast[1].high}°
			          		</div>
		          		</div>
		          	</div>
		        </div>
		    </div>
			<div className="col-sm-7 col-xs-6">
		        <div className="row">
		          	<div className="col-sm-4 col-xs-6 card__day-forecast">
		          		<div className="row">
			          		<div className="card__forecast__day col-sm-6 col-xs-6">
			          			{weekForecast[2].day}
			          		</div>
		          		</div>
		          	
			          	<div className="row">
			          		<div className="card__forecast__temp col-sm-3 col-xs-3">
			          			{weekForecast[2].low}°
			          		</div>
			          		<div className="card__forecast__temp col-sm-3 col-xs-3">
			          			{weekForecast[2].high}°
			          		</div>
			          	</div>
		          	</div>

		          	<div className="col-sm-4 col-xs-6 card__day-forecast">
		          		<div className="row">
			          		<div className="card__forecast__day col-sm-6 col-xs-6">
			          			{weekForecast[3].day}
			          		</div>
		          		</div>
		          	
		          		<div className="row card__day-forecast">
			          		<div className="card__forecast__temp col-sm-3 col-xs-3">
			          			{weekForecast[3].low}°
			          		</div>
			          		<div className="card__forecast__temp col-sm-3 col-xs-3">
			          			{weekForecast[3].high}°
			          		</div>
		          		</div>
		          	</div>

		          	<div className="col-sm-4 col-xs-4 card__day-forecast--responsive">
			          	<div className="row">
			          		<div className="card__forecast__day col-sm-6 col-xs-6">
			          			{weekForecast[4].day}
			          		</div>
			          	</div>
		          	
		          		<div className="row">
			          		<div className="card__forecast__temp col-sm-3 col-xs-3">
			          			{weekForecast[4].low}°
			          		</div>
			          		<div className="card__forecast__temp col-sm-3 col-xs-3">
			          			{weekForecast[4].high}°
			          		</div>
		          		</div>
		          	</div>
		        </div>
		    </div>
		</div>
	);
}

export default CardForecast;