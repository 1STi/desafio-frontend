const PAR_CONFIG = '&units=metric&lang=pt&appid=a858fc44f702b381ee95af1c97f48f29'

class API {
  constructor() {
    this.getCurrent = async (city) => {
      try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},br${PAR_CONFIG}`
        const json = await fetch(URL)
        const response = await json.json()
        if (response.cod === 404) throw new Error('Cidade não encotrada :(')
        return response
      } catch (e) {
        console.log(e)
        return null
      }
    }
  }
}

export default new API()
