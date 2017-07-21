const qs = (selector) => document.querySelector(selector);
const qsAll = (selector) => document.querySelectorAll(selector);

// ------------------ SPINNER ------------------ //
let myVar;



function showLoader() {
  myVar = setTimeout(showPage, 2000);
}



function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("application").style.display = "block";
}



// ------------------ SEARCH SECTION ------------------ //
function getQueryURL(city) {
  return `http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u=%22c%22&format=json`;
}



function submitHandler(e) {
  e.preventDefault();
  qs('header h1').classList.toggle('shrink');
  let cityInput = qs('#form-input');
  
  displaySearchedData(cityInput.value);
  cityInput.value = '';
}



function displaySearchedData(city) {
  const URL = getQueryURL(city);

  axios(URL)
    .then(response => response.data.query.results.channel)
      .then(cityData => {
        console.log(cityData);
        displayWeatherData(cityData);
      })
    .catch(error => alert(error))
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
  const outputDoesNotExist = qsAll('.search__output').length === 0;

  if (outputDoesNotExist) {
    const div = document.createElement('div');
    div.setAttribute('class', 'search__output');

    div.innerHTML = `
      <div class="search__output__main">
        <h6 class="output__location" id="output-location">${location.city}, ${location.region}, ${location.country}</h6>
        <img class="output__close" src="./images/close.png" alt="Close button" width="20" id="close-btn"/>
        
        <h1 class="output__temperature" id="output-temperature">${item.condition.temp}°${units.temperature} ${item.condition.text}</h1>

        <div class="output__temperature-sub">
          <img src="./images/down-arrow.png" width="16" alt="Down Arrow"><span id="output-min">${item.forecast[0].low}°</span>
          <img src="./images/up-arrow.png" width="16" alt="Up Arrow"><span id="output-max">${item.forecast[0].high}°</span>
          <span style="padding-left: .9rem;"><span class="fw-300">Sensação</span> 19°C</span>
        </div>

        <div class="output__wind-humidity">
          <span>Vento <span class="fw-800" id="output-wind">${wind.speed}${units.speed}</span></span>
          <span style="padding-left: .9rem;">Humidade <span class="fw-800" id="output-humidity">${atmosphere.humidity}%</span></span>
        </div>

      </div> 

      <hr class="hr__custom--small-orange">

      <div class="search__output__footer">
        <ul class="clearfix" id="output-forecasts">
          ${getForecastList(item.forecast)}
        </ul>

      </div>
    `
    const form = qs('#form');
    qs('#search').insertBefore(div, form);

    // event listener to the 'close' button.
    qs('#close-btn').addEventListener('click', () => {
      qs('.search__output').remove();
    });

  } else {
    qs('#output-location').innerHTML = `${location.city}, ${location.region}, ${location.country}`;
    qs('#output-temperature').innerHTML = `${item.condition.temp}°${units.temperature} ${item.condition.text}`;
    qs('#output-min').innerHTML = `${item.forecast[0].low}°`;
    qs('#output-max').innerHTML = `${item.forecast[0].high}°`;
    qs('#output-wind').innerHTML = `${wind.speed}${units.speed}`;
    qs('#output-humidity').innerHTML = `${atmosphere.humidity}%°`;
    qs('#output-forecasts').innerHTML = `${getForecastList(item.forecast)}`;
  }
}



function getForecastList(forecastArray) {
  const x = forecastArray.slice(1, 6).map(resp => {
    return `
      <li>
        <span class="day">${convertDayTextToPortguese(resp.day)}</span> <span class="temperature">${resp.low}° ${resp.high}°</span>
      </li>
    `;
  });

  return x.join('');
}



// ------------------ CAPITALS SECTION ------------------ //
(function displayCapitalsData() {
  const capitals = [
    'São Paulo', 'Rio de Janeiro', 'Salvador', 'Fortaleza', 
    'Belo Horizonte', 'Curitiba', 'Manaus', 'Recife', 'Porto Alegre', 
    'Belém', 'Goiânia', 'São Luís', 'Maceió', 'Teresina', 'Natal', 'Campo Grande', 
    'João Pessoa', 'Aracaju', 'Florianópolis', 'Porto Velho', 'Macapá', 'Vitória', 
    'Rio Branco', 'Boa Vista', 'Palmas TO'
  ];

  capitals.map((capital, index) => {
    axios(getQueryURL(capital))
      .then(response => response.data.query.results.channel)
        .then(capitalObj => {
          display(capitalObj);
        })
  });

}());



function display(capital) {
  const isDivider = qsAll('.table__content').length === 13;
  const min = capital.item.forecast[0].low;
  const max = capital.item.forecast[0].high;
  const city = capital.location.city;
  const tr = document.createElement('tr');

  if (isDivider) {
    const trMinMax = document.createElement('tr');
    trMinMax.setAttribute('class', 'table__header show-in-desktop');
    trMinMax.innerHTML = `
      <th>Min</th>
      <th>Máx</th>
      <th></th>
    `;
    qs('#capitals-table').appendChild(trMinMax);
  }


  tr.setAttribute('class', 'table__content');  
  tr.innerHTML = `
    <td>${min}°</td>
    <td>${max}°</td>
    <td>${city}</td>
  `;

  qs('#capitals-table').appendChild(tr); 
}
