import React, { Component } from 'react';
import { IoAndroidArrowUp, IoAndroidArrowDown } from 'react-icons/lib/io';

class DetailedWeatherForecast extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let { dataWF } = this.props;
    let today = dataWF.forecast[0];
    let days = dataWF.forecast.slice(1, 6);
    return (
      <div class="wf-detail">
        <div class="wf-detail__location">{dataWF.location.city}, {dataWF.location.region} - {dataWF.location.country}</div>
        <div class="wf-detail__condition">{dataWF.condition.temp}ºC {dataWF.condition.text}</div>
        <div class="wf-detail__today">
          <div class="wf-detail__high-low-today">
            <span class="wf-detail__icon"><IoAndroidArrowUp /></span>{today.high}º 
            &nbsp;
            <span class="wf-detail__icon"><IoAndroidArrowDown /></span>{today.low}º
          </div>
          <div class="wf-detail__will">
            Sensação <strong>{dataWF.wind.chill}º</strong>
          </div>
        </div>
        <div class="wf-detail__wind-and-atmosphere">
          <div class="wf-detail__wind">
            Vento <strong>{dataWF.wind.speed}Km/h </strong>
          </div>
          <div class="wf-detail__atmosphere">
            Humidade <strong>{dataWF.atmosphere.humidity}%</strong>
          </div>
        </div>
        <div class="wf-detail__forecast">
            {days.map((item) => {
              return (
                <div class="wf-detail__forecastOfTheDay">
                    <div class="wf-detail__day">{item.day}</div>
                    <div class="wf-detail__high-low">{item.high}º {item.low}º</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default DetailedWeatherForecast;
