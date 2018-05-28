import React, { Component } from 'react';

import Header from '../components/header/Header';
import Search from '../components/search/Search';
import StatesCapital from '../components/states-capital/StatesCapital';
import DetailedWeatherForecast 
from '../components/detailed-weather-forecast/DetailedWeatherForecast';

import getWeatherForecast from '../services/api';
import fahrenheitToCelsius from '../services/fahrenheit-to-celsius';
import mphToKph from '../services/mph-to-kph';
import translateConditionsToPt from '../services/translate-conditions-to-pt';
import translateWeekToPt from '../services/translate-week-to-pt';

class AppShell extends Component {
  constructor(props){
    super(props);
    this.state = { 
      wfCapitalListValue: [],
      detailedWFValue: undefined,
      loadingCapitals: true
    };
    this.getDetailWeatherForecast = this.getDetailWeatherForecast.bind(this);
    this.closeDetailWeatherForecast = this.closeDetailWeatherForecast.bind(this);
  }

  getDetailWeatherForecast(city){
    getWeatherForecast(city).then(
      (res) => {
        if(res.data.query.results){
          const { channel } = res.data.query.results;
          let dataWF = {
            location: channel.location,
            condition: channel.item.condition,
            atmosphere: channel.atmosphere,
            wind: channel.wind,
            forecast: channel.item.forecast 
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
        }else{
          console.log("Nome de cidade inválido");
          this.setState( { detailedWFValue: undefined } );
        }
      }
    );
  }

  closeDetailWeatherForecast(){
    this.setState( { detailedWFValue: undefined } );
  }

  componentWillMount(){

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
        let dataWfCapitals = {};
        if(item.data.query.results){
          const { channel } = item.data.query.results;
          dataWfCapitals = {
            cityName: channel.location.city,
            min: fahrenheitToCelsius(channel.item.forecast[0].low),
            max: fahrenheitToCelsius(channel.item.forecast[0].high)
          }
        };
        return dataWfCapitals;
      });
      this.setState( { wfCapitalListValue: res, loadingCapitals: false } );
    });

  }

  render(){
    return (
      <div className="wf-container">
        <div className="wf-container__box">

          <Header />
        
          { this.state.detailedWFValue 
            && (<DetailedWeatherForecast 
            dataWF={this.state.detailedWFValue}
            onClickIconClose={this.closeDetailWeatherForecast} />)}
        
          <Search onClickButtonSearch={this.getDetailWeatherForecast} />

          {this.state.loadingCapitals && <div className="wf-container__loading">Carregando...</div>}

          {(this.state.wfCapitalListValue 
            && this.state.wfCapitalListValue.length != 0 ) &&
            <StatesCapital wfCapitalList={this.state.wfCapitalListValue} />}

          {((!this.state.wfCapitalListValue 
            || this.state.wfCapitalListValue.length == 0 )
            && !this.state.loadingCapitals) && <div>Erro</div>}

        </div>
      </div>
    );
  }
}

export default AppShell;
