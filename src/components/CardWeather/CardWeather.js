import React from "react";
import {
  CardWeatherContainer,
  Location,
  ForecastContainer,
  ForecastWeekDay,
  WeekDay,
  WeekDayTemp,
  WeatherNow,
  ItemsWeatherNow,
  Row,
  Arrow,
  Close,
  Error
} from "./CardWeatherStyled";
import { HorizontalLine } from "../HorizontalLine";
import { ArrowDown, ArrowUp } from "../../shared/img";

const CardWeather = ({ nextDays = [], current = {}, onClose, error }) => {
  const { name, sys = {}, weather = [], main = {}, wind = {} } = current;
  return (
    <CardWeatherContainer>
      <Close onClick={onClose}>&times;</Close>
      {!!error ? (
        <Error>{error}</Error>
      ) : (
        <>
          <Location>
            {name} - {sys.country}
          </Location>
          <WeatherNow>
            {main.temp}º {weather[0] && weather[0].main}
          </WeatherNow>
          <Row>
            <ItemsWeatherNow>
              <Arrow src={ArrowDown} />
              <span>{main.temp_min}º </span>
              <Arrow src={ArrowUp} />
              <span>{main.temp_max}º</span>
            </ItemsWeatherNow>
            <ItemsWeatherNow>
              Sensação &nbsp; <span>{main.feels_like}º</span>
            </ItemsWeatherNow>
          </Row>
          <Row>
            <ItemsWeatherNow>
              Vento &nbsp; <span>{wind.speed}km/h</span>
            </ItemsWeatherNow>
            <ItemsWeatherNow>
              Humidade &nbsp; <span>{main.humidity}%</span>
            </ItemsWeatherNow>
          </Row>
          <HorizontalLine type={"primary"} />

          <ForecastContainer>
            {nextDays.map(item => (
              <ForecastWeekDay>
                <WeekDay>{item.day_of_week}</WeekDay>
                <WeekDayTemp>
                  {item.temp_max}º {item.temp_max}º
                </WeekDayTemp>
              </ForecastWeekDay>
            ))}
          </ForecastContainer>
        </>
      )}
    </CardWeatherContainer>
  );
};

export default CardWeather;
