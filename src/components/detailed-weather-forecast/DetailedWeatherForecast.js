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
      <div className="wf-detail_container">
      <div className="wf-detail">
        <div className="wf-detail__location">{dataWF.location.city}, {dataWF.location.region} - {dataWF.location.country}</div>
        <div className="wf-detail__condition">{dataWF.condition.temp}ºC {dataWF.condition.text}</div>
        <div className="wf-detail__today">
          <div className="wf-detail__high-low-today">
            <span className="wf-detail__icon"><IoAndroidArrowUp /></span>{today.high}º 
            &nbsp;
            <span className="wf-detail__icon"><IoAndroidArrowDown /></span>{today.low}º
          </div>
          <div className="wf-detail__will">
            Sensação <strong>{dataWF.wind.chill}º</strong>
          </div>
        </div>
        <div className="wf-detail__wind-and-atmosphere">
          <div className="wf-detail__wind">
            Vento <strong>{dataWF.wind.speed}Km/h </strong>
          </div>
          <div className="wf-detail__atmosphere">
            Humidade <strong>{dataWF.atmosphere.humidity}%</strong>
          </div>
        </div>
        <div className="wf-detail__forecast">
            {days.map((item) => {
              return (
                <div className="wf-detail__forecastOfTheDay" key={item.day}>
                    <div className="wf-detail__day">{item.day}</div>
                    <div className="wf-detail__high-low">{item.high}º {item.low}º</div>
                </div>
              );
            })}
        </div>
      </div>
      </div>
    );
  }
}

export default DetailedWeatherForecast;
