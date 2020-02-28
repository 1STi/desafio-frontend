export type ActionData = {type: string; payload: any};

export type Weekday = 'Seg' | 'Ter' | 'Qua' | 'Qui' | 'Sex' | 'Sab' | 'Dom';

export type ForecastCondition = {
  day: Weekday;
  date: number;
  low: number;
  high: number;
  text: string;
  code: number;
};

export type LocationForecast = {
  woeid: number;
  city: string;
  region: string;
  country: string;
  wind: number;
  humidity: number;
  temperature: number;
  feelsLike: number; // => https://github.com/strikeentco/feels
  forecasts: ForecastCondition[];
};

export function translateWeekday(src: string): string {
  // @ts-ignore
  return {
    Mon: 'Seg',
    Tue: 'Ter',
    Wed: 'Qua',
    Thu: 'Qui',
    Fri: 'Sex',
    Sat: 'Sab',
    Sun: 'Dom',
  }[src];
}

export function translateCondition(code: number, lang = 'pt-BR'): string {
  try {
    // @ts-ignore
    return {
      0: {'pt-BR': 'Tornado'},
      1: {'pt-BR': 'Tempestade Tropical'},
      2: {'pt-BR': 'Furação'},
      3: {'pt-BR': 'Trovoadas Intensas'},
      4: {'pt-BR': 'Trovoadas'},
      5: {'pt-BR': 'Chuva e Neve'},
      6: {'pt-BR': 'Chuva e Chuva Com Neve'},
      7: {'pt-BR': 'Neve e Chuva Com Neve'},
      8: {'pt-BR': 'Garoa Congelante'},
      9: {'pt-BR': 'Garoa'},
      10: {'pt-BR': 'Pancadas de Chuva'},
      11: {'pt-BR': 'Chuva'},
      12: {'pt-BR': 'Flocos de Neve'},
      13: {'pt-BR': 'Nevascas Leves'},
      14: {'pt-BR': 'Neve Baixa'},
      15: {'pt-BR': 'Ventos de Neve'},
      16: {'pt-BR': 'Neve'},
      17: {'pt-BR': 'Granizo'},
      18: {'pt-BR': 'Chuva Com Neve'},
      19: {'pt-BR': 'Poeira'},
      20: {'pt-BR': 'Nebuloso'},
      21: {'pt-BR': 'Neblina'},
      22: {'pt-BR': 'Esfumaçado'},
      23: {'pt-BR': 'Tempestuoso'},
      24: {'pt-BR': 'Ventania'},
      25: {'pt-BR': 'Frio'},
      26: {'pt-BR': 'Nublado'},
      27: {'pt-BR': 'Nublado (Noite)'},
      28: {'pt-BR': 'Nublado (Dia)'},
      29: {'pt-BR': 'Parcialmente Nublado (Noite)'},
      30: {'pt-BR': 'Parcialmente Nublado (Dia)'},
      31: {'pt-BR': 'Céu Limpo'},
      32: {'pt-BR': 'Ensolarado'},
      33: {'pt-BR': 'Estável (Noite)'},
      34: {'pt-BR': 'Estável (Dia)'},
      35: {'pt-BR': 'Chuva e Granizo'},
      36: {'pt-BR': 'Calor'},
      37: {'pt-BR': 'Tempestades Isoladas'},
      38: {'pt-BR': 'Tempestades Espalhadas'},
      39: {'pt-BR': 'Pancadas de Chuva (Dia)'},
      40: {'pt-BR': 'Chuva Forte'},
      41: {'pt-BR': 'Chuva e Neve'},
      42: {'pt-BR': 'Neve Forte'},
      43: {'pt-BR': 'Nevasca'},
      44: {'pt-BR': 'Sem Previsão'},
      45: {'pt-BR': 'Pancadas Espalhadas'},
      46: {'pt-BR': 'Pancadas de Neve Espalhadas'},
      47: {'pt-BR': 'Tempestades Espalhadas'},
    }[code][lang];
  } catch (e) {
    console.error(e);
    return 'NOT_FOUND:' + code + '/' + lang;
  }
}
