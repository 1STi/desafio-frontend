(function(w, d){
  var searchForm = d.querySelector('.search__form'),
    searchQuery = d.querySelector('.search__city'),
    cityClose = d.querySelector('.city__close'),
    axiosInstance = axios.create({
      baseURL: 'https://query.yahooapis.com/v1/public/',
      timeout: 10000
    });

  searchWeather = function () {
    return axiosInstance.get('/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+searchQuery.value+'") and u="c"&format=json')
      .then(function (result) {
        return result.data.query.results.channel;
      }).catch(function (error) {
        return error;
      });
  }

  searchCapital = function () {
    var rio = axiosInstance.get('/yql?q=select location.city, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Rio de Janeiro") and u="c"&format=json'),
      sp = axiosInstance.get('/yql?q=select location.city, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Sao Paulo") and u="c"&format=json'),
      bh = axiosInstance.get('/yql?q=select location.city, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Belo Horizonte") and u="c"&format=json'),
      br = axiosInstance.get('/yql?q=select location.city, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Brasilia") and u="c"&format=json'),
      be = axiosInstance.get('/yql?q=select location.city, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Belem") and u="c"&format=json'),
      sa = axiosInstance.get('/yql?q=select location.city, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Salvador") and u="c"&format=json'),
      cu = axiosInstance.get('/yql?q=select location.city, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Curitiba") and u="c"&format=json'),
      fr = axiosInstance.get('/yql?q=select location.city, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Fortaleza") and u="c"&format=json'),
      ma = axiosInstance.get('/yql?q=select location.city, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Manaus") and u="c"&format=json'),
      jp = axiosInstance.get('/yql?q=select location.city, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Joao Pessoa") and u="c"&format=json');
    
    return axios.all([rio, sp, bh, br, be, sa, cu, fr, ma, jp])
      .then(function (result) {
        var results = [];
        for (var i = 0; i < 10; i++) {
          results[i] = {
            city: result[i].data.query.results.channel[0].location.city,
            forecast: result[i].data.query.results.channel[0].item.forecast 
          };
        }
        return results;
      }).catch(function (error) {
        return error;
      });
  }

  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    searchWeather().then(function (result) {
      console.log(result);
      d.querySelector('.city__header h1').textContent = result.location.city + ', ' +
        result.location.region + ' - Brasil';
      d.querySelector('.city__header h2').textContent = result.item.condition.temp + 'ºC' + ' ' + 
        result.item.condition.text;
      d.querySelector('.city__low').textContent = result.item.forecast[0].low + 'º';      
      d.querySelector('.city__high').textContent = result.item.forecast[0].high + 'º';
      d.querySelector('.city__wind').textContent = Math.floor(result.wind.speed) + 'km/h';
      d.querySelector('.city__humidity').textContent = result.atmosphere.humidity + '%';
      d.querySelector('.city__feels__like').textContent = Math.floor((result.wind.chill -32) * 5 / 9) +
       'ºC';

      var cityNext = d.querySelector('.city__next');
      cityNext.textContent = '';
      for (var i = 1; i < 6; i++) {
        var div = d.createElement('div'),
          h1 = d.createElement('h1'),
          h2 = d.createElement('h2');
        h1.textContent = result.item.forecast[i].day;
        h2.textContent = result.item.forecast[i].low + 'º ' + result.item.forecast[i].high + 'º';
        div.appendChild(h1);
        div.appendChild(h2);
        cityNext.appendChild(div);
      }
      d.querySelector('.header').classList.add('header--open')
      d.querySelector('.city').classList.remove('city--closed');
    });
  });

  cityClose.addEventListener('click', function (event) {
    event.preventDefault();
    d.querySelector('.header').classList.remove('header--open');
    d.querySelector('.city').classList.add('city--closed');
  });

  w.addEventListener('load', function (event) {
    var container = d.querySelector('.capital__container');
    var column1 = d.createElement('div'),
      column2 = d.createElement('div'),
      header1 = d.createElement('div'),
      header2 = d.createElement('div');
    
    column1.classList.add('capital__container__column');
    column2.classList.add('capital__container__column');
    header1.classList.add('capital__container__header');
    header2.classList.add('capital__container__header');
    header2.classList.add('mobile__hidden');

    header1.innerHTML = '<p class="capital__min">Min</p><p class="capital__max">Max</p><p class="capital__city>&nbsp;</p>"';
    header2.innerHTML = '<p class="capital__min">Min</p><p class="capital__max">Max</p><p class="capital__city>&nbsp;</p>"';

    searchCapital().then(function (result) {
      console.log(result);
      column1.appendChild(header1);
      column2.appendChild(header2);

      for (var i = 0; i < 10; i++) {
        var min = d.createElement('p'),
          max = d.createElement('p'),
          city = d.createElement('p'),
          div = d.createElement('div');

        min.classList.add('capital__min');
        max.classList.add('capital__max');
        city.classList.add('capital__city');

        min.textContent = result[i].forecast.low + 'º';
        max.textContent = result[i].forecast.high + 'º';
        city.textContent = result[i].city;

        div.appendChild(min);
        div.appendChild(max);
        div.appendChild(city);     

        if (i < 5) {
          column1.appendChild(div);
        } else {
          column2.appendChild(div);
        }
      }

      container.appendChild(column1);
      container.appendChild(column2);
    }).catch(function (error) {
      console.log(error);
    });
  });

})(window, document);
