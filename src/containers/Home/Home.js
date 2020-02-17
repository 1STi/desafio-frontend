import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Container } from "./HomeStyled";
import {
  requestForecastWeatherByCity,
  requestCurrentWeatherByCity,
  removeCurrentWeather
} from "../../store/ducks/Weather";
import { requestWeatherCapital } from "../../store/ducks/WeatherCapital";
import {
  Typography,
  CapitalList,
  SearchCity,
  CardWeather
} from "../../components";

const Home = () => {
  const dispatch = useDispatch();
  const infoWeather = useSelector(store => store.weather.data);
  const infoCurrentWeather = useSelector(store => store.weather.current);
  const infoWeatherCapital = useSelector(store => store.weatherCapital.data);
  const isLoading = useSelector(store => !!store.weather.loading);
  const error = useSelector(store => store.weather.error);
  const [term, setTerm] = useState("");

  useEffect(() => {
    dispatch(requestWeatherCapital());
  }, []);

  const handleSearch = _term => {
    dispatch(requestForecastWeatherByCity(_term));
    dispatch(requestCurrentWeatherByCity(_term));
    setTerm("");
  };

  return (
    <Container>
      <Typography type="title">Previsão do tempo</Typography>
      {(!!infoCurrentWeather.name || !!error) && (
        <CardWeather
          nextDays={infoWeather}
          current={infoCurrentWeather}
          onClose={() => dispatch(removeCurrentWeather())}
          error={error}
        />
      )}
      <SearchCity
        placeholder="Insira aqui o nome da cidade"
        onChange={setTerm}
        onClick={() => handleSearch(term)}
        isLoading={isLoading}
        term={term}
      />
      <CapitalList list={infoWeatherCapital} />
      {/* {infoWeatherCapital.map(item => (
        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt=""
        />
      ))} */}
    </Container>
  );
};

export default Home;
