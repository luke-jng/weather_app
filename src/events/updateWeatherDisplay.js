//when weather is found
const updateWeatherLocation = (weatherJsonVal) => {
    const weatherLocElem = document.getElementById('weather_location');
    weatherLocElem.innerText = weatherJsonVal;
}

const updateWeatherImg = (weatherJsonVal) => {
    const weatherImageElem = document.getElementById('weather_img');
    weatherImageElem.src = 'https:'+ weatherJsonVal;
}

const updateWeatherDesc = (weatherJsonVal) => {
    const weatherDescElem = document.getElementById('weather_desc');
    weatherDescElem.innerText = "Current Condition: " + weatherJsonVal;
}

const updateWeatherTemps = (weatherJsonVal1, weatherJsonVal2) => {
    const weatherTempElem = document.getElementById('weather_temp');
    weatherTempElem.innerText = "Current Temperature (F): " + weatherJsonVal1;

    const weatherRFTempElem = document.getElementById('weather_rftemp');
    weatherRFTempElem.innerText = "Current Real Feel (F): " + weatherJsonVal2;
}

const updateWeatherFound = (weatherJson) => {
    updateWeatherLocation(weatherJson.locationDetail);
    updateWeatherImg(weatherJson.weatherImg);
    updateWeatherDesc(weatherJson.weatherDesc);
    updateWeatherTemps(weatherJson.weatherTemp, weatherJson.weatherRFTemp);
}

const updateWeatherNotFound = (weatherJson) => {
    const errorText = 'No Data';

    updateWeatherLocation(weatherJson.errorMsg);

    const weatherImageElem = document.getElementById('weather_img');
    //add a no images found image here

    updateWeatherDesc(errorText);
    updateWeatherTemps(errorText, errorText);
}

const updateWeatherDisplayElems = (weatherJson) => {
    if (!('errorMsg' in weatherJson)){  //no error
        updateWeatherFound(weatherJson);
        console.log("updating weather display with", weatherJson)
    } else {                            //error
        updateWeatherNotFound(weatherJson);
        console.log("updating with error", weatherJson)
    }
}

export { updateWeatherDisplayElems }