export default function Weather(Api) {
  return {
    getCity: payload => Api.get({
      query: `?q=select * from weather.forecast where u="${payload.unity}" AND woeid in (select woeid from geo.places(1) where text="${payload.city}" and lang="pt-BR")&format=json`
    }),
    prepareGetCity: payload => Api.prepareGetCity({
      query: `?q=select location.city, item.forecast from weather.forecast where u="${payload.unity}" AND woeid in (select woeid from geo.places(1) where text="${payload.city}" and lang="pt-BR")&format=json`
    })
  };
};
