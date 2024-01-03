const API_KEY = process.env.WEATHER_APP_API_KEY;
//
async function getWeather(userInputLocation) {
    const response  = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userInputLocation}`, {mode: 'cors'})
    const weatherData = await response.json();
    console.log(weatherData);
    
    //set to return a text, img, temp (f), and real feel (f)
    if (!('error' in weatherData)) {
        const compactWeatherVals = {
            locationDetail: `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`,
            // locationDetail: weatherData.location.name,
            // isDay: weatherData.location.is_day,
            // weatherImgCode: weatherData.current.condition.code,
            weatherDesc: weatherData.current.condition.text,
            weatherImg: weatherData.current.condition.icon,
            weatherTempF: weatherData.current.temp_f,
            weatherRFTempF: weatherData.current.feelslike_f,
            weatherTempC: weatherData.current.temp_c,
            weatherRFTempC: weatherData.current.feelslike_c,
            weatherHumidity: weatherData.current.humidity,
            weatherWind: weatherData.current.wind_mph
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