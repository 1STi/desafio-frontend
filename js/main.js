const qs = (selector) => document.querySelector(selector);
const qsAll = (selector) => document.querySelectorAll(selector);

// ------------------ SPINNER ------------------ //

// function responsible to show the loader spinner for 2 seconds
function toggleLoader() {
  setTimeout(showPage, 500);
}

// function that will be called after 2s on the showLoader
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("application").style.display = "block";
}



// ------------------ SEARCH SECTION ------------------ //

// responsible to get the Yahoo API URL based on the city parameter
function getQueryURL(city) {
  return `http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u=%22c%22&format=json`;
}


// function that will deal with the submition of the form
function submitFormHandler(e) {
  e.preventDefault();
  let cityInput = qs('#form-input');
  
  // function will be called only if the input form exists
  if (cityInput.value) {
    getSearchedData(cityInput.value);
    
    cityInput.value = '';
  }
}


/* function the will get the data from the API, and display it right after that
  ps: i wrote a question about this function in the README, maybe you can answer for me */
function getSearchedData(city) {
  const URL = getQueryURL(city);

  axios(URL)
    .then(response => response.data.query.results.channel)
      .then(cityData => {
        console.log(cityData);
        displayWeatherData(cityData);
      })
      /* i had to make this call because the shrink was been called before the data from the API was passed
      and that was making some problems with the layout */
      .then(() => qs('header').setAttribute('class', 'shrink'))
    .catch(error => {
      if (String(error) === `TypeError: Cannot read property 'channel' of null`) {
        return alert('Cidade inválida, digite novamente!');
      } else {
        alert(error);
      }
    });
}


// the data on the API is displayed in english, so i wrote this function to convert it to pt-BR
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



// function that will display the data obtained from the API
function displayWeatherData({location, item, units, wind, atmosphere}) {
  const outputDoesNotExist = qsAll('.search__output').length === 0;

  if (outputDoesNotExist) {
    // that's basicly going to display the output box
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
          ${displayForecastList(item.forecast)}
        </ul>

      </div>
    `
    const form = qs('#form');
    qs('#search').insertBefore(div, form);

    // event listener to the 'close' button.
    qs('#close-btn').addEventListener('click', () => {
      qs('.search__output').remove();
      qs('header').classList.toggle('shrink');
    });

  } else {
    /* in case the output box already exist, it doesn't make sense to write it all again
      so i replaced the data that already exists with the new ones from the new API request */
    qs('#output-location').innerHTML = `${location.city}, ${location.region}, ${location.country}`;
    qs('#output-temperature').innerHTML = `${item.condition.temp}°${units.temperature} ${item.condition.text}`;
    qs('#output-min').innerHTML = `${item.forecast[0].low}°`;
    qs('#output-max').innerHTML = `${item.forecast[0].high}°`;
    qs('#output-wind').innerHTML = `${wind.speed}${units.speed}`;
    qs('#output-humidity').innerHTML = `${atmosphere.humidity}%°`;
    qs('#output-forecasts').innerHTML = `${displayForecastList(item.forecast)}`;
  }
}


/* this function will display the data of the next 5 forecasts 
 of the week and put it on the output box footer. */
function displayForecastList(forecastArray) {
  const forecastsLI = forecastArray.slice(1, 6).map(resp => {
    return `
      <li>
        <span class="day">${convertDayTextToPortguese(resp.day)}</span> <span class="temperature">${resp.low}° ${resp.high}°</span>
      </li>
    `;
  });

  return forecastsLI.join('');
}



// ------------------ CAPITALS SECTION ------------------ //
(function getCapitalsData() {
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
          displayCapitalData(capitalObj, index);
        })
    .catch(error => alert(error));
  });

}());


// this function will display the capital data obtained from the API
function displayCapitalData(capital, index) {
  const isDivider = (qsAll('.table__content').length === 13);
  const isLastRequest = (index === 23);
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

  // this ensures that the application will be shown only 0.5s after the last capital request is made
  if(isLastRequest) {
    toggleLoader();
  }
}
