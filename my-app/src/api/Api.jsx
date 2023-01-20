import axios from "axios";

const url = "https://63c35ecd8bb1ca3475609df9.mockapi.io/api/weather/v1/";

export const apiWeather = axios.create({
  baseURL: url,
});

export const getAllInfo = () =>
  apiWeather.get("weathers").then((response) => {
    return response;
  });

export const getWeatherByCity = (id) =>
  apiWeather.get(`weathers/${id}`).then((response) => response.data);
