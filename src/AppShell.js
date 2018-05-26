import React, { Component } from 'react';

import Header from './components/header/Header';
import Search from './components/search/Search';
import StatesCapital from './components/states-capital/StatesCapital';
import DetailedWeatherForecast 
from './components/detailed-weather-forecast/DetailedWeatherForecast';

import getWeatherForecast from './services/api';
import fahrenheitToCelsius from './services/fahrenheit-to-celsius';
import mphToKph from './services/mph-to-kph';
import translateConditionsToPt from './services/translate-conditions-to-pt';
import translateWeekToPt from './services/translate-week-to-pt';

class AppShell extends Component {
  constructor(props){
    super(props);

    this.state = { 
      wfCapitalListValue: [],
      detailedWFValue: undefined
    };

  }

  componentWillMount(){

    getWeatherForecast("Brasília").then(
      (res) => {
        let dataWF = {
          location: res.data.query.results.channel.location,
          condition: res.data.query.results.channel.item.condition,
          atmosphere: res.data.query.results.channel.atmosphere,
          wind: res.data.query.results.channel.wind,
          forecast: res.data.query.results.channel.item.forecast 
        };

        dataWF.condition.temp = fahrenheitToCelsius(dataWF.condition.temp);
        dataWF.condition.text = translateConditionsToPt(dataWF.condition.text);
        dataWF.wind.chill = fahrenheitToCelsius(dataWF.wind.chill);
        dataWF.wind.speed = mphToKph(dataWF.wind.speed);

        dataWF.forecast.map( item => {
          item.day = translateWeekToPt(item.day);
          item.high = fahrenheitToCelsius(item.high);
          item.low = fahrenheitToCelsius(item.low);
          return item;
        });
        
        this.setState( { detailedWFValue: dataWF } );
      }
    );

    Promise.all([
      getWeatherForecast("Rio de Janeiro"),
      getWeatherForecast("São Paulo"),
      getWeatherForecast("Belo Horizonte"),
      getWeatherForecast("Brasília"),
      getWeatherForecast("Belém"),
      getWeatherForecast("Salvador"),
      getWeatherForecast("Curitiba"),
      getWeatherForecast("Fortaleza"),
      getWeatherForecast("Manaus"),
      getWeatherForecast("João Pessoa")
    ]).then(res => {
      res = res.map( item => {
        let dataWfCapitals = {
          cityName: item.data.query.results.channel.location.city,
          min: fahrenheitToCelsius(item.data.query.results.channel.item.forecast[0].low),
          max: fahrenheitToCelsius(item.data.query.results.channel.item.forecast[0].high)
        }
        return dataWfCapitals;
      });
      this.setState( { wfCapitalListValue: res } );
    });

  }

  render(){
    return (
      <div className="wf-container">
        <div className="wf-container__box">
          <Header />
          { this.state.detailedWFValue && (<DetailedWeatherForecast dataWF={this.state.detailedWFValue} />)}
          <Search />
          {(this.state.wfCapitalListValue && this.state.wfCapitalListValue.length != 0) ?
            <StatesCapital wfCapitalList={this.state.wfCapitalListValue} />
          : (<p>erro</p>)}
        </div>
      </div>
    );
  }
}

export default AppShell;
