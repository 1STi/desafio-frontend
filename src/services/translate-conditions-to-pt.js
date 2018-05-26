const translateConditionsToPt = term => {

    term = term.toLowerCase();
    switch(term){
        case "tornado": return "Tornado";
        case "tropical storm": return "Chuva Tropical";
        case "hurricane": return "Furacão";
        case "severe thunderstorms": return "Tempestades Severas";
        case "thunderstorms": return "Trovoadas";
        case "mixed rain and snow": return "Chuva e Neve Misturadas";
        case "mixed rain and sleet": return "Chuva e Granizo Misturados";
        case "mixed snow and sleet": return "Neve e Granizo Misturados";
        case "freezing drizzle": return "Chuvisco Congelante";
        case "drizzle": return "Chuvisco";
        case "freezing rain": return "Chuva Congelante";
        case "showers": return "Chuveirada";
        case "snow flurries": return "Flocos de Neve";
        case "light snow showers": return "Nevascas Leves";
        case "blowing snow": return "Soprando Neve";
        case "snow": return "Neve";
        case "hail": return "Chuva de Pedras";
        case "sleet": return "Chuva com Neve";
        case "dust": return "Poeira";
        case "foggy": return "Nebuloso";
        case "haze": return "Neblina";
        case "smoky": return "Esfumaçado";
        case "blustery": return "Tempestuoso";
        case "windy": return "Ventoso";
        case "cold": return "Frio";
        case "cloudy": return "Nublado";
        case "mostly cloudy (night)": return "Principalmente Nublado (noite)";
        case "mostly cloudy (day)": return "Principalmente Nublado (dia)";
        case "partly cloudy (night)": return "Parcialmente Nublado (noite)";
        case "partly cloudy (day)": return "Parcialmente Nublado (dia)";
        case "clear (night)": return "Claro (noite)";
        case "sunny": return "Ensolarado";
        case "fair (night)": return "Razoável (noite)";
        case "fair (day)": return "Razoável (dia)";
        case "mixed rain and hail": return "Chuva e Granizo Misturados";
        case "hot": return "Quente";
        case "isolated thunderstorms": return "Tempestades Isoladas";
        case "scattered thunderstorms": return "Tempestades Dispersas";
        case "scattered showers": return "Chuvas Dispersas";
        case "heavy snow": return "Neve Pesada";
        case "scattered snow showers": return "Chuvas de Neve Espalhadas";
        case "partly cloudy": return "Parcialmente Nublado";
        case "thundershowers": return "Trovões";
        case "snow showers": return "Chuveiros de Neve";
        case "isolated thundershowers": return "Trovoadas Isoladas";

        case "breezy": return "Ventoso";
    }
    
}; 

export default translateConditionsToPt;
