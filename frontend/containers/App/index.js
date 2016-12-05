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
    this.onCloseCard = this.onCloseCard.bind(this);
    this.state = {
      toggleCard: 'hidden'
    };
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
    this.setState({ toggleCard: 'show' });
    this.fetchCity(keyword)
      .then(response => {
        const { query: { results } } = response;
        this.props.weatherAct.getSingleCity(results);
      }).catch(error => error);
  }

  onCloseCard() {
    this.setState({ toggleCard: 'hidden' });
  }

  render() {
    return (
      <div className="app clearfix">
          <div className="container clearfix">
            <div className="center">
              <Header onSearch={this.onSearch}
                      onCloseCard={this.onCloseCard}
                      toggleCard={this.state.toggleCard}
                      city={this.props.weather.currentCity}/>
                <main className="main">
                  <div className="main__content">
                    <div className="main__division-line"></div>
                    <div className="main__capitals-list">
                      <List cities={this.props.weather.cities}/>
                    </div>
                  </div>
                </main>
            </div>
        </div>
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
