const API_KEY = process.env.WEATHER_APP_API_KEY;

async function getWeather(userInputLocation) {
    const response  = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userInputLocation}`, {mode: 'cors'})
    const weatherData = await response.json();
    console.log(weatherData);
    
    //set to return a text, img, temp (f), and real feel (f)
    if (!('error' in weatherData)) {
        const compactWeatherVals = {
            locationDetail: `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`,
            weatherDesc: weatherData.current.condition.text,
            weatherImg: weatherData.current.condition.icon,
            weatherTemp: weatherData.current.temp_f,
            weatherRFTemp: weatherData.current.feelslike_f
        }
        console.log(compactWeatherVals)
        return compactWeatherVals;
    } else {
        const errorObj = {
            errorMsg: weatherData.error.message
        }
        console.log(errorObj, "this is error obj")
        return errorObj;
    }
}


export { getWeather };