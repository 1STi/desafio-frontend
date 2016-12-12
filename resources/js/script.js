var query = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22:city%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

var namesCapitals = ["Rio de Janeiro", "Sao Paulo"
    , "Belo Horizonte", "Brasilia"
    , "Belem", "Salvador"
    , "Curitiba", "Fortaleza"
    , "Manaus", "Joao Pessoa"];

/** Get node element */
function $(element) {
    return document.querySelector(element);
}

/** Converts fahrenheit to celsius. */
function toCelsius(f) {
    return ((f - 32) / 1.8).toFixed(0);
}

/** Converts Mph to Mps. */
function toMps(s) {
    return (s * 0.44 / 1).toFixed(2);
}

/** Converts Mph to Km/h. */
function toKmh(s) {
    return (s * 1.60934 / 1).toFixed(2);
}

/** Get value of thermal sensation by means of wind speed and temperature. */
function getThermalSensation(v, t) {
    return (33 + (10 * (v / v) + 10.45 - v) * (t - 33) / 22).toFixed(2);
}

function loadJson(city, callback) {
    var req = new XMLHttpRequest();

    var url = query.replace(":city", encodeURI(city));

    req.onreadystatechange = function () {
        if (this.readyState == 0) { // Request not initialized.
            console.log("Request not initialized...");
        } else if (this.readyState == 1) { // Server connection established.
            console.log("Server connection established...");
        } else if (this.readyState == 2) { // Request received.
            console.log("Request received...");
        } else if (this.readyState == 3) { // Processing request.
            console.log("Processing request...");
        } else if (this.readyState == 4 && this.status == 200) { // Request finished and response is ready.
            callback(city, JSON.parse(this.responseText));
        }
    };

    req.open("GET", url, true);
    req.send();
}

function loadCapitals() {
    namesCapitals.forEach(function (city) {
        loadJson(city, renderCapital);
    });
}

function renderCapital(city, json) {
    if (json.query.results) {
        var prev = json.query.results.channel.item.forecast[0];

        var tableBody = $("#table-body-capitals");

        var tr = document.createElement("TR");
        var tdMin = document.createElement("TD");
        var tdMax = document.createElement("TD");
        var tdCapital = document.createElement("TD");

        tdMin.setAttribute("class", "celsius");
        tdMax.setAttribute("class", "celsius");
        tdCapital.setAttribute("class", "city");

        tdMin.appendChild(document.createTextNode(toCelsius(prev.low)));
        tdMax.appendChild(document.createTextNode(toCelsius(prev.high)));
        tdCapital.appendChild(document.createTextNode(city));

        tr.appendChild(tdMin);
        tr.appendChild(tdMax);
        tr.appendChild(tdCapital);

        tableBody.appendChild(tr);
    }
}

function renderCity(city, json) {
    if (json.query.results) {
        $("#modal-result").style.display = "block";

        var channel = json.query.results.channel;

        var location = channel.location;
        $("#location").innerHTML = location.city + ", " + location.region + " - " + location.country;

        var condition = channel.item.condition;
        $("#condition").innerHTML = toCelsius(condition.temp) + "°C " + condition.text;

        var today = channel.item.forecast[0];
        $("span#low").innerHTML = toCelsius(today.low);
        $("span#high").innerHTML = toCelsius(today.high);

        var wind = channel.wind;
        $("span#sensation").innerHTML = getThermalSensation(toMps(wind.speed), toCelsius(condition.temp));
        $("span#wind").innerHTML = toKmh(wind.speed);

        var atmosphere = channel.atmosphere;
        $("span#humidity").innerHTML = atmosphere.humidity;

        // Forecast search result.
        var ul = $("ul#forecast");

        // Remove all child elements
        while (ul.hasChildNodes()) ul.removeChild(ul.firstChild);

        for (var index = 1; index <= 5; index++) {
            var li = document.createElement("LI");
            var header = document.createElement("HEADER");
            var h4 = document.createElement("H4");
            var p = document.createElement("P");
            var spanLow = document.createElement("SPAN");
            var spanHigh = document.createElement("SPAN");

            spanLow.setAttribute("class", "celsius");
            spanHigh.setAttribute("class", "celsius");

            h4.appendChild(document.createTextNode(channel.item.forecast[index].day));
            spanLow.appendChild(document.createTextNode(toCelsius(channel.item.forecast[index].low)));
            spanHigh.appendChild(document.createTextNode(toCelsius(channel.item.forecast[index].high)));

            header.appendChild(h4);
            p.appendChild(spanLow);
            p.appendChild(spanHigh);
            li.appendChild(header);
            li.appendChild(p);
            ul.appendChild(li);
        }
    }
}

function searchCity(city) {
    loadJson(city, renderCity);
}

function init() {
    $("#input-city").addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            var city = $("#input-city").value.trim();

            if (city != "") {
                searchCity(city);
            }
        }
    });

    $("#close-result").addEventListener("click", function (event) {
        $("#modal-result").style.display = "none";
    });

    loadCapitals();
}

window.onload = init;