import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as weatherActions from 'root/actions/weather';
import { CITIES } from 'root/constants/weather';
import { Header, List, Footer } from 'root/components';
import SuperComponent from 'root/SuperComponent';

class App extends SuperComponent {
  constructor(props, context) {
    super(props, context);
    this.onSearch = this.onSearch.bind(this);
    this.fetchCity = this.fetchCity.bind(this);
  }

  componentDidMount() {
    const requestsCities = CITIES.map(city => {
      return this.Api.Weather.prepareGetCity({ city,  unity: "c" })();
    });
    this.props.weatherAct.getParalelalCities(requestsCities);
  }

  fetchCity(city) {
    return this.Api.Weather.getCity({ city, unity: "c" });
  }

  onSearch(event) {
    // @TODO Add Debounce and move this request for actions
    event.preventDefault();
    const keyword = this.props.form.weather.values.city;
    this.fetchCity(keyword)
      .then(response => {
        const { query: { results } } = response;
        this.props.weatherAct.getSingleCity(results);
      }).catch(error => error);
  }

  render() {
    return (
      <div className="app">
        <Header onSearch={this.onSearch} />
          <main className="main">
            <List />
          </main>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    ...state,
    weather: state.weather,
    form: state.form
  };
};

const mapDispatchToProps = dispatch => {
  return {
    weatherAct: bindActionCreators(weatherActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
