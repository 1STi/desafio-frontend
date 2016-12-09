var query = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22:city%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

var namesCapitals = ["Rio de Janeiro", "São Paulo"
    , "Belo Horizonte", "Brasília"
    , "Belém", "Salvador"];

function $(element) {
    return document.querySelector(element);
}

function toCelsius(f) {
    return ((f - 32) / 1.8).toFixed(0);
}

function loadJson(city, callback) {
    var req = new XMLHttpRequest();

    var url = query.replace(":city", encodeURI(city));

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
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
        
        var location = json.query.results.channel.location;
        $("#location").innerHTML = location.city + ", " + location.region + " - " + location.country;

        var condition = json.query.results.channel.item.condition;
        $("#condition").innerHTML = toCelsius(condition.temp) + "°C " + condition.text;
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