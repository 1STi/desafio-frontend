function submitHandler(e) {
  e.preventDefault();
  let city = document.querySelector('#form-input').value;
  
  getDataFromAPI(city);
  city = '';
}


function getDataFromAPI(city) {
  const URL = 
    `http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u=%22c%22&format=json`;

  axios(URL)
    .then(response => response.data.query.results.channel)
      .then(cityData => {
        console.log(cityData);
        displayWeatherData(cityData);
      })
    .catch(error => alert('Cidade não encontrada, tente novamente'))
}

function convertDayTextToPortguese(day) {
  switch (day) {
    case 'Sun': {
      return 'Domingo';
      break;
    }
    
    case 'Mon': {
      return 'Segunda';
      break;
    }

    case 'Tue': {
      return 'Terça';
      break;
    }

    case 'Wed': {
      return 'Quarta';
      break;
    }

    case 'Thu': {
      return 'Quinta';
      break;
    }

    case 'Fri': {
      return 'Sexta';
      break;
    }

    case 'Sat': {
      return 'Sabádo';
      break;
    }

    default: {
      return 'Dia não identificado';
      break;
    }
  }
}

function displayWeatherData({location, item, units, wind, atmosphere}) {
  const div = document.createElement('div');
  div.setAttribute('class', 'search__output');

  div.innerHTML = `
    <div class="search__output__main">
      <h6 class="output__city">${location.city}, ${location.region}, ${location.country}</h6>
      <h1 class="output__temperature">${item.condition.temp}°${units.temperature} ${item.condition.text}</h1>

      <div class="output__temperature-sub">
        <span><img src="./images/down-arrow.png" width="16" alt="Down Arrow">${item.forecast[0].low}°</span>
        <span><img src="./images/up-arrow.png" width="16" alt="Down Arrow">${item.forecast[0].high}°</span>
        <span style="padding-left: .9rem;"><span class="fw-300">Sensação</span> 19°C</span>
      </div>

      <div class="output__wind-humidity">
        <span>Vento <span class="fw-800">${wind.speed}${units.speed}</span></span>
        <span style="padding-left: .9rem;">Humidade <span class="fw-800">${atmosphere.humidity}%</span></span>
      </div>

    </div> 

    <hr class="hr__custom--small-orange">

    <div class="search__output__footer">
      <ul class="clearfix">
        ${getForecastList(item.forecast)}
      </ul>

    </div>
  `
  const form = document.querySelector('#form');
  document.querySelector('#search').insertBefore(div, form);
}

function getForecastList(forecastArray) {
  const x = forecastArray.slice(1, 6).map(resp => {
    return `
      <li>
        <span class="day">${convertDayTextToPortguese(resp.day)}</span> <span class="temperature">${resp.low}° ${resp.high}</span>
      </li>
    `;
  });

  console.log(x);

  return x.join('');
}