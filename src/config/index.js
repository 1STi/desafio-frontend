const STAGES = {
  dev: {
    BASE_URL: "",
    BASE_URL_WEATHER: "http://api.openweathermap.org/data/2.5/"
  },
  stg: {
    BASE_URL: "",
    BASE_URL_WEATHER: "http://api.openweathermap.org/data/2.5/"
  },
  prd: {
    BASE_URL: "",
    BASE_URL_WEATHER: "http://api.openweathermap.org/data/2.5/"
  }
};

const env = process.env.REACT_APP_STAGE || "dev";
const config = STAGES[env];

export default config;
