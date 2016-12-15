import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeCard } from '../actions/index';

import CardForecast from '../components/card_forecast';
import CardInfo from '../components/card_info';

class Card extends Component {
	render() {
		const {weather, visible, error, isFetching} = this.props.card;

		if(isFetching) {
            return (
                <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            );
        }

        if(error) {
            return (
                <div className="message--error"> {error} </div>
            );
        } 	

		if(!visible) {
			return null;
		}

        let forecast = [];
        forecast = weather.weekForecast.map(forecast => {
        	return (<li className="card__forecast__day" key={forecast.day}><div>{forecast.day}</div></li>);
        });

		return (
			<section className="card-section">
				<div className="content">
					<div className="card">
						<i className="fa fa-times" onClick={() => this.props.closeCard()}></i>
						<CardInfo weather={weather} />
						<CardForecast weekForecast={weather.weekForecast}/>	
					</div>		
				</div>			
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ closeCard }, dispatch);
}

function mapStateToProps({card}) {
	return { card };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);