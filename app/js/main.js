((window, document) => {
	const CONFIG = {
		url: 'https://query.yahooapis.com/v1/public/yql'
	}
	
	let loop = (elements, callback) => {
		let i = 0
		let length = elements.length

		while(i < length) {
			callback(elements[i])
			i++
		}
	} 
	
	let updateHTML = (target, content, clear) => {
		if(clear) {
			document.querySelector(target).innerHTML = ''
		}

		document.querySelector(target).insertAdjacentHTML('beforeend', content)
	}

	let calculateSensation = (temperature, wind) => {
	  let windSpeed = wind / 3.6
	  
	  let sensation = Math.floor(33 + (10 * Math.sqrt(windSpeed) + 10.45 - windSpeed) * (temperature - 33) / 22);
	  
	  return sensation;
	}

	let i18n = input => {
	  let values = {
	    'Sun': 'Domingo',
	    'Mon': 'Segunda',
	    'Tue': 'Terça',
	    'Wed': 'Quarta',
	    'Thu': 'Quinta',
	    'Fri': 'Sexta',
	    'Sat': 'Sábado',
	    
	    'Partly Cloud'            : 'Parcialmente Nublado',
	    'Partly Cloudy'           : 'Nublado',
	    'Showers'                 : 'Chuvoso',
	    'AM Showers'              : 'Chuvoso à manhã',
	    'PM Showers'              : 'Chuvoso à noite',
	    'PM Thunderstorms'        : 'Trovoadas à noite',
	    'Scattered Thunderstorms' : 'Trovoadas dispersas',
	    'Light Rain with Thunder' : 'Chuva leve, com trovões',
	    'Thunderstorms'           : 'Trovoadas',
	    'Heavy Rain'              : 'Chuva forte',
	    'Mostly Sunny'            : 'Parcialmente ensolarado',
	    'Light Rain'              : 'Chuva leve',
	    'Fog'                     : 'Névoa',
	    'Fair'                    : 'Sereno',
	    'Sunny'                   : 'Ensolarado',
	    'AM Rain'                 : 'Chuva à manhã',
	    'PM Rain'                 : 'Chuva à noite',
	    'Mostly Cloudy'           : 'Parcialmente Nublado',
	    'Isolated Thunderstorms'  : 'Trovoadas isoladas',
	    'Thundershowers'          : 'Trovoadas',
	    'Heavy Thunderstorms'     : 'Trovoadas fortes',
	    'Clear'                   : 'Limpo',
	    'Rain'                    : 'Chuva',
	    'Cloudy'                  : 'Nublado'
	  }
  
	  return values[input]
	}



	let handleWeather = () => {
		let title = document.querySelector('.js-title')
		
		let closeButton = document.querySelector('.js-close')
		let weather = document.querySelector('.js-weather')

		closeButton.addEventListener('click', (e) => {
			title.classList.remove('title--sm')
			title.classList.add('title--md')

			weather.classList.remove('weather--show')
			weather.classList.add('weather--hide')
		})
	}
	
	let getCityData = () => {
		let title = document.querySelector('.js-title')

		let form = document.querySelector('form')
		let weather = document.querySelector('.js-weather')
	
		form.addEventListener('submit', (e) => {
			e.preventDefault()

			title.classList.remove('title--md')
			title.classList.add('title--sm')
			
			weather.classList.remove('weather--hide')
			weather.classList.add('weather--show')

			console.log(1)
			
			let param = document.querySelector('input').value
		
			axios.get(CONFIG.url + '?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + param + '") and u="c"&format=json')
				.then(res => {
					showCityData(res)
				})
				.catch(error => {
					throw error
				})
		})

	}


	let showCityData = res => {
		let city 			= res.data.query.results.channel.location.city,
		 		region 		= res.data.query.results.channel.location.region,
		 		country 	= res.data.query.results.channel.location.country,
		 		temp 			= res.data.query.results.channel.item.condition.temp,
				text 			= res.data.query.results.channel.item.condition.text,
				min 			= res.data.query.results.channel.item.forecast[0].low,
				max 			= res.data.query.results.channel.item.forecast[0].high,
		 		wind 			= Math.floor(res.data.query.results.channel.wind.speed),
		 		sensation = calculateSensation(temp, wind),
				humidity 	= res.data.query.results.channel.atmosphere.humidity,
				forecast 	= res.data.query.results.channel.item.forecast.slice(1, 6)

		updateHTML('.js-location', `${city + ',' + region + ' - ' + country}`, true)
		updateHTML('.js-now', `${temp + '°C ' + i18n(text)}`, true)
		updateHTML('.js-temperature--min', `${min + 'º'}`, true)
		updateHTML('.js-temperature--max', `${max + 'º'}`, true)
		updateHTML('.js-wind', `${wind + 'km/h'}`, true)
		updateHTML('.js-sensation', `${sensation + 'ºC'}`, true)
		updateHTML('.js-humidity', `${humidity + '%'}`, true)
		updateHTML('.js-forecast--one', `<p>${i18n(forecast[0].day)}</p><span>${forecast[0].low + 'º' + ' ' + forecast[0].high + 'º'}</span>`, true)
		updateHTML('.js-forecast--two', `<p>${i18n(forecast[1].day)}</p><span>${forecast[1].low + 'º' + ' ' + forecast[1].high + 'º'}</span>`, true)
		updateHTML('.js-forecast--three', `<p>${i18n(forecast[2].day)}</p><span>${forecast[2].low + 'º' + ' ' + forecast[2].high + 'º'}</span>`, true)
		updateHTML('.js-forecast--four', `<p>${i18n(forecast[3].day)}</p><span>${forecast[3].low + 'º' + ' ' + forecast[3].high + 'º'}</span>`, true)
		updateHTML('.js-forecast--five', `<p>${i18n(forecast[4].day)}</p><span>${forecast[4].low + 'º' + ' ' + forecast[4].high + 'º'}</span>`, true)
	}

	let getCapitalsData = () => {
		let capitals = [
			axios.get(CONFIG.url + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Rio de Janeiro") and u="c"&format=json'),
			axios.get(CONFIG.url + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Sao Paulo") and u="c"&format=json'),
			axios.get(CONFIG.url + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Belo Horizonte") and u="c"&format=json'),
			axios.get(CONFIG.url + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Brasilia") and u="c"&format=json'),
			axios.get(CONFIG.url + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Belem") and u="c"&format=json'),
			axios.get(CONFIG.url + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Salvador") and u="c"&format=json'),
			axios.get(CONFIG.url + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Curitiba") and u="c"&format=json'),
			axios.get(CONFIG.url + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Fortaleza") and u="c"&format=json'),
			axios.get(CONFIG.url + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Manaus") and u="c"&format=json'),
			axios.get(CONFIG.url + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="João Pessoa") and u="c"&format=json')
		]

		axios.all(capitals).then(res => {
		 	showCapitalsData(res)
		}).catch(error => {
			throw error
		})
	}

	let showCapitalsData = res => {
		let capitals = []
		let index = 0

		loop(res, el => {

			let capital = {
				city: el.data.query.results.channel[0].location.city,
				min: el.data.query.results.channel[0].item.forecast.low,
				max: el.data.query.results.channel[0].item.forecast.high,
				index: index++
			}

			capitals.push(capital)
		})

		loop(capitals, capital => {
			if(capital.index < 5) {
				updateHTML('.js-tbody--first', `<td>${capital.min + 'º'}</td><td>${capital.max + 'º'}</td><td>${capital.city}</td>`)
			} else {
				updateHTML('.js-tbody--last', `<td>${capital.min + 'º'}</td><td>${capital.max + 'º'}</td><td>${capital.city}</td>`)
			}
		})
	}
	
	getCapitalsData()
	getCityData()
	handleWeather()
})(window, document)