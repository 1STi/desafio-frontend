import Axios from "axios";
import config from "../config";
import { capital, daysOfWeek } from "../config/constants";

export const getForecastWeatherByCity = async city => {
  const url = `${config.BASE_URL_WEATHER}forecast?appid=56d5bb6657707845fbe02c5bea0e7b83&units=metric&q=${city}`;

  const response = await Axios.get(url);
  const list = response.data.list;
  const listMap = list.map((item, index) => {
    return {
      temp_min: item.main.temp_min.toFixed(0),
      temp_max: item.main.temp_min.toFixed(0),
      day_of_week: daysOfWeek[new Date(item.dt * 1000).getDay()]
    };
  });

  const uniqueList = daysOfWeek
    .map(dayOfWeek => listMap.find(item => item.day_of_week === dayOfWeek))
    .filter(item => item);
  return uniqueList;
};

export const getCurrentWeatherByCity = async city => {
  const url = `${config.BASE_URL_WEATHER}weather?appid=56d5bb6657707845fbe02c5bea0e7b83&units=metric&q=${city}`;
  const response = await Axios.get(url);
  return response.data;
};

export const getWeatherCapital = async () => {
  const capitalIds = capital.map(item => item.id);
  const url = `${
    config.BASE_URL_WEATHER
  }group?appid=56d5bb6657707845fbe02c5bea0e7b83&units=metric&id=${capitalIds.join(
    ","
  )}`;

  const response = await Axios.get(url);
  console.log(response);

  return response.data.list;
};
