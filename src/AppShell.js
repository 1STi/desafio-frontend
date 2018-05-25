import React, { Component } from 'react';

import Header from './components/header/Header';
import Search from './components/search/Search';
import StatesCapital from './components/states-capital/StatesCapital';
import DetailedWeatherForecast 
from './components/detailed-weather-forecast/DetailedWeatherForecast';

class AppShell extends Component {
  constructor(props){
    super(props);
    this.wfCapitalListValue = [
      {min: 25, max: 33, cityName: "Rio de Janeiro"},
      {min: 25, max: 33, cityName: "São Paulo"},
      {min: 25, max: 33, cityName: "Belo Horizonte"},
      {min: 25, max: 33, cityName: "Brasília"},
      {min: 25, max: 33, cityName: "Belém"},
      {min: 25, max: 33, cityName: "Salvador"},
      {min: 25, max: 33, cityName: "Curitiba"},
      {min: 25, max: 33, cityName: "Fortaleza"},
      {min: 25, max: 33, cityName: "Manaus"},
      {min: 25, max: 33, cityName: "João Pessoa"}
    ];
    this.detailedWFValue = {
      location: {
        city: "Niterói",
        country: "Brasil",
        region: " RJ"
      },
      condition: {
        code: "23",
        date: "Thu, 24 May 2018 11:00 AM BRT",
        temp: "82",
        text: "Breezy"
      },
      atmosphere: {
        humidity: "45",
        pressure: "973.0",
        rising: "0",
        visibility: "16.1"
      },
      wind: {
        chill: "82",
        direction: "135",
        speed: "25"
      },
      forecast: [
        {
          code: "30",
          date: "24 May 2018",
          day: "Thu",
          high: "85",
          low: "68",
          text: "Partly Cloudy"
        },
        {
          "code": "30",
          "date": "25 May 2018",
          "day": "Fri",
          "high": "87",
          "low": "69",
          "text": "Partly Cloudy"
        },
        {
          "code": "30",
          "date": "26 May 2018",
          "day": "Sat",
          "high": "88",
          "low": "69",
          "text": "Partly Cloudy"
        },
        {
          "code": "30",
          "date": "27 May 2018",
          "day": "Sun",
          "high": "83",
          "low": "68",
          "text": "Partly Cloudy"
        },
        {
          "code": "23",
          "date": "28 May 2018",
          "day": "Mon",
          "high": "85",
          "low": "69",
          "text": "Breezy"
        },
        {
          "code": "23",
          "date": "29 May 2018",
          "day": "Tue",
          "high": "82",
          "low": "69",
          "text": "Breezy"
        },
        {
          "code": "23",
          "date": "30 May 2018",
          "day": "Wed",
          "high": "82",
          "low": "70",
          "text": "Breezy"
        },
        {
          "code": "30",
          "date": "31 May 2018",
          "day": "Thu",
          "high": "83",
          "low": "69",
          "text": "Partly Cloudy"
        },
        {
          "code": "30",
          "date": "01 Jun 2018",
          "day": "Fri",
          "high": "87",
          "low": "70",
          "text": "Partly Cloudy"
        },
        {
          "code": "30",
          "date": "02 Jun 2018",
          "day": "Sat",
          "high": "85",
          "low": "71",
          "text": "Partly Cloudy"
        }
      ]
    };
  }
  render(){
    return (
      <div class="wf-container">
        <div class="wf-container__box">
          <Header />
          <DetailedWeatherForecast dataWF={this.detailedWFValue} />
          <Search />
          <StatesCapital wfCapitalList={this.wfCapitalListValue} />
        </div>
      </div>
    );
  }
}

export default AppShell;
