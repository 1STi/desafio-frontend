function submitHandler(e) {
  e.preventDefault();
  const city = document.querySelector('#form-input').value;
  
  getDataFromAPI(city);
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
}

function displayWeatherData({location, item, units, wind, atmosphere}) {
  const div = document.createElement('div');
  div.setAttribute('class', 'search__output');

  div.innerHTML = `
    <div class="search__output__main">
      <h6 class="output__city">${location.city}, ${location.region}, ${location.country}</h6>
      <h1 class="output__temperature">${item.condition.temp}°${units.temperature} ${item.condition.text}</h1>

      <div class="output__temperature-sub">
        <span><img src="./images/down-arrow.png" width="16" alt="Down Arrow">16°</span>
        <span><img src="./images/up-arrow.png" width="16" alt="Down Arrow">25°</span>
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
        <li>
          <span class="day">Terça</span> <span class="temperature">18° 26°</span>
        </li>

        <li>
          <span class="day">Quarta</span> <span class="temperature">18° 26°</span>
        </li>

        <li>
          <span class="day">Quinta</span> <span class="temperature">18° 26°</span>
        </li>

        <li>
          <span class="day">Sexta</span> <span class="temperature">18° 26°</span>
        </li>

        <li>
          <span class="day">Sábado</span> <span class="temperature">18° 26°</span>
        </li>
      </ul>

    </div>
  `
  const form = document.querySelector('#form');
  document.querySelector('#search').insertBefore(div, form);
}
