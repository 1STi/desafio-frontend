import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e) {
		this.setState({ term: e.target.value });
	}	

	onFormSubmit(e) {
		e.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' })
	}

	render() {
		return (
			<div className="search-bar-section">
				<div className="content">
					<form onSubmit={this.onFormSubmit}>
						<div className="search__input search__input--right-icon">
							<i className="fa fa-search" aria-hidden="true"></i>
						 	<input 
								type="text"
								className="form-control"
								value={this.state.term}
								placeholder="Insira aqui o nome da cidade"
								onChange={this.onInputChange}
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

// <button type="submit" className="button-search"><span className="fa fa-search"></span></button>

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
