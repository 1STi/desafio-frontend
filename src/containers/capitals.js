import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchListWeather } from '../actions/index';
import ResponsiveTable from '../components/capitals_table'
import TableRow from '../components/capitals_table_row';
						
class Capitals extends Component {
	componentWillMount() {
		this.props.fetchListWeather();
	}

	render() {
		const {capitals, error, isFetching} = this.props.list;

		if(error) {
            return (
                <div className="message--error"> {error} </div>
            );
        } 

        if(isFetching) {
            return (
                <i className="fa fa-spinner fa-spin fa-fw"></i>
            );
        }

        let rowsNumber = Math.round(capitals.length/2);
        let firstTableRows = [];
        let secondTableRows = [];

        capitals.forEach((capital, index) => {
        	if(index < rowsNumber)
				firstTableRows.push(<TableRow capital={capital} key={capital.name} />);
			else
				secondTableRows.push(<TableRow capital={capital} key={capital.name} />);
		})


		return (
			<section className="capitals-section"> 
				<div className="content">	
					<div className="capitals">
						<h2 className="capitals__title">Capitais</h2>
						<ResponsiveTable rows={firstTableRows} name={'capitals__firstTable'}/>
						{ secondTableRows.lenght ?
							<ResponsiveTable rows={secondTableRows} name={'capitals__secondTable'}/>
							: null
						}
					</div>
				</div>
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchListWeather }, dispatch);
}

function mapStateToProps({list}) {
	return { list };
}

export default connect(mapStateToProps, mapDispatchToProps)(Capitals);