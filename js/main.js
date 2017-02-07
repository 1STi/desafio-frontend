//Const for API url
const urlAPI = 'https://query.yahooapis.com/v1/public/yql';

//Function for get capitals from data base
const capitals = [
	axios.get(urlAPI + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Rio de Janeiro") and u="c"&format=json'),
	axios.get(urlAPI + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="São Paulo") and u="c"&format=json'),
	axios.get(urlAPI + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Belo Horizonte") and u="c"&format=json'),
	axios.get(urlAPI + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Brasília") and u="c"&format=json'),
	axios.get(urlAPI + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Belém") and u="c"&format=json'),
	axios.get(urlAPI + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Salvador") and u="c"&format=json'),
	axios.get(urlAPI + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Curitiba") and u="c"&format=json'),
	axios.get(urlAPI + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Fortaleza") and u="c"&format=json'),
	axios.get(urlAPI + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="Manaus") and u="c"&format=json'),
	axios.get(urlAPI + '?q=select location, item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="João Pessoa") and u="c"&format=json')
];

//Function for translate from english to portuguese
const translate = {
	'Sun': 'Domingo',
    'Mon': 'Segunda',
    'Tue': 'Terça',
    'Wed': 'Quarta',
    'Thu': 'Quinta',
    'Fri': 'Sexta',
    'Sat': 'Sábado',
    
    'Tornado' 				  : 'Tornado',
    'Tropical Storm'          : 'Temprestade Tropical',
    'Hurricane'               : 'Furacão',
    'Severe Thunderstorms'    : 'Tempestades Severas',
    'Thunderstorms'           : 'Trovoadas',
    'Mixed Rain And Snow'     : 'Chuva e Neve',
    'Mixed Rain And Sleet'    : 'Chuva e Geada',
    'Mixed Snow And Sleet'    : 'Neve e Geada',
    'Freezing Drizzle'        : 'Chuva Congelante',
    'Showers'                 : 'Chuvoso',
    'Snow Flurries'           : 'Flocos de Neve',
    'Light Snow Showers'      : 'Nevascas Leves',
    'Blowing Snow'            : 'Soprando Neve',
    'Snow'                    : 'Neve',
    'Hail'                    : 'Granizo',
    'Sleet'                   : 'Geada',
    'Dust'                    : 'Tempestade de Areia',
    'Foggy'                   : 'Nevoento',
    'Haze'                    : 'Neblina',
    'Smoky'	                  : 'Enfumaçado',
    'Cloudy'                  : 'Nublado',
    'Blustery'                : 'Tempestuoso',
    'Windy'                   : 'Ventoso',
    'Cold'                    : 'Frio',
    'Mostly Cloudy'           : 'Parcialmente Nublado',
    'Partly Cloud'            : 'Parcialmente Nublado',
    'Hot'                     : 'Quente',
    'Heavy Snow'              : 'Neve Pesada',
    'Snow Showers'            : 'Chuva de Neve',
    'Rain And Snow'           : 'Chuva e Neve',
    'Partly Cloudy'           : 'Nublado',
    'Rain'                    : 'Chuva',
    'AM Showers'              : 'Chuvoso à Manhã',
    'PM Showers'              : 'Chuvoso à Noite',
    'PM Thunderstorms'        : 'Trovoadas à Noite',
    'Scattered Thunderstorms' : 'Trovoadas Dispersas',
    'Light Rain with Thunder' : 'Chuva leve com trovões',
    'Heavy Rain'              : 'Chuva Forte',
    'Mostly Sunny'            : 'Parcialmente Ensolarado',
    'Light Rain'              : 'Chuva leve',
    'Fog'                     : 'Névoa',
    'Fair'                    : 'Sereno',
    'Sunny'                   : 'Ensolarado',
    'AM Rain'                 : 'Chuva à manhã',
    'PM Rain'                 : 'Chuva à noite',
    'Isolated Thunderstorms'  : 'Trovoadas Isoladas',
    'Thundershowers'          : 'Trovoadas',
    'Heavy Thunderstorms'     : 'Trovoadas Fortes',
    'Clear'                   : 'Limpo'
}

//Function for show update the HTML
let insertHTML = function(target, content, clear){
	if (clear){
		document.querySelector(target).innerHTML = ''
	}
	document.querySelector(target).insertAdjacentHTML('beforeend', content)
}

//Function for show capitals
let showCapitals = function(){
	let i = 0;
	let index = 0;
	for (i=0;i<=9;i++){
		capitals[i].then(function(response){
			//console.log(response);
			let city = response.data.query.results.channel[0].location.city;
			let min = response.data.query.results.channel[0].item.forecast.low;
			let max = response.data.query.results.channel[0].item.forecast.high;
			if (index<5){
				insertHTML('.capitals__table__data--first', '<div>' + '<span class="capitals__temp">' + min + 'º ' + max + 'º ' + '</span>' + city + '</div>', false);	
			}else{
				insertHTML('.capitals__table__data--second', '<div>' + '<span class="capitals__temp">' + min + 'º ' + max + 'º ' + '</span>' + city + '</div>', false);
			}
			index++;
		});
	}
}

//Function for show search box
let showSearchBox = function(){
	document.querySelector('.search__box--hidden').classList.add('search__box');
	document.querySelector('.search__box').classList.remove('search__box--hidden');

	if(screen.width > 768){
		document.querySelector('.header').style.fontSize = "20px";
		document.querySelector('.header').style.padding = "20px 0";
	}else{
		document.querySelector('.header').style.fontSize = "12px"
	}
}

//Function for hide search box
let hiddenSearchBox = function(){
	document.querySelector('.search__box').classList.add('search__box--hidden');
	document.querySelector('.search__box--hidden').classList.remove('search__box');
	if(screen.width > 768){
		document.querySelector('.header').style.fontSize = "30px";
		document.querySelector('.header').style.padding = "60px 0";
	}else{
		document.querySelector('.header').style.fontSize = "20px";
	}
}

//Function for show search info
let showSearch = function(){
	value = document.querySelector('input').value;
	axios.get(urlAPI + '?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + value + '") and u="c"&format=json').
	then(function(response){
		console.log(response);
		let city = response.data.query.results.channel.location.city;
		let region = response.data.query.results.channel.location.region;
		let country = response.data.query.results.channel.location.country;
		let low = response.data.query.results.channel.item.forecast[0].low;
		let high = response.data.query.results.channel.item.forecast[0].high;
		let wind = Math.floor(response.data.query.results.channel.wind.speed);
		let humidity = response.data.query.results.channel.atmosphere.humidity;
		let temp = response.data.query.results.channel.item.condition.temp;
		let text = response.data.query.results.channel.item.condition.text;
		let sensation = Math.floor(33 + (10 * Math.sqrt(wind) + 10.45 - wind) * (temp-33)/2);
		let low1 = response.data.query.results.channel.item.forecast[1].low;
		let high1 = response.data.query.results.channel.item.forecast[1].high;
		let day1 = response.data.query.results.channel.item.forecast[1].day;
		let low2 = response.data.query.results.channel.item.forecast[2].low;
		let high2 = response.data.query.results.channel.item.forecast[2].high;
		let day2 = response.data.query.results.channel.item.forecast[2].day;
		let low3 = response.data.query.results.channel.item.forecast[3].low;
		let high3 = response.data.query.results.channel.item.forecast[3].high;
		let day3 = response.data.query.results.channel.item.forecast[3].day;
		let low4 = response.data.query.results.channel.item.forecast[4].low;
		let high4 = response.data.query.results.channel.item.forecast[4].high;
		let day4 = response.data.query.results.channel.item.forecast[4].day;
		let low5 = response.data.query.results.channel.item.forecast[5].low;
		let high5 = response.data.query.results.channel.item.forecast[5].high;
		let day5 = response.data.query.results.channel.item.forecast[5].day;
		insertHTML('.search__local', city + ',' + region + ' - ' + country, true);
		insertHTML('.search__temp__low', low + 'º', true);
		insertHTML('.search__temp__high', high + 'º', true);
		insertHTML('.search__wind__km', wind + 'km/h', true);
		insertHTML('.search__humidity__pct', humidity + '%', true);
		insertHTML('.search__temp', temp + 'ºC ' + translate[text], true);
		insertHTML('.search__sensation__celsius', temp + 'º', true);
		insertHTML('.search__future', '<div class="search__future__column">' + '<div class="search__future__day">' + translate[day1] + '</div>' + '<div class="search__future__temp">' + low1 + 'º ' + high1 + 'º' + '</div>' + '</div>' 
			+ '<div class="search__future__column">' + '<div class="search__future__day">' + translate[day2] + '</div>' + '<div class="search__future__temp">' + low2 + 'º ' + high2 + 'º' + '</div>' + '</div>' 
			+ '<div class="search__future__column">' + '<div class="search__future__day">' + translate[day3] + '</div>' + '<div class="search__future__temp">' + low3 + 'º ' + high3 + 'º' + '</div>' + '</div>' 
			+ '<div class="search__future__column">' + '<div class="search__future__day">' + translate[day4] + '</div>' + '<div class="search__future__temp">' + low4 + 'º ' + high4 + 'º' + '</div>' + '</div>' 
			+ '<div class="search__future__column">' + '<div class="search__future__day">' + translate[day5] + '</div>' + '<div class="search__future__temp">' + low5 + 'º ' + high5 + 'º' + '</div>' + '</div>', true);


	});
}	

//Call Capitals when page loaded
window.onload = function(){
	showCapitals();
}

//Call search when submit the form
document.querySelector('.search__form').addEventListener('submit', function(e){
	e.preventDefault();
	showSearch();
	showSearchBox();
});	

//Hide Search when click on the close button
document.querySelector('.search__close').addEventListener('click', function(e){
	hiddenSearchBox();
});	