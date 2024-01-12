const fahrenheitEntity = '&deg;F';
const celciusEntity = '&deg;C';

const updateWeatherLocation = (weatherJsonVal) => {
    const weatherLocElem = document.getElementById('weather_location');
    weatherLocElem.innerText = weatherJsonVal;
}

const updateWeatherImg = (weatherJsonVal) => {
    const weatherImageElem = document.getElementById('weather_img');
    weatherImageElem.src = 'https:'+ weatherJsonVal;
    weatherImageElem.style.height = "175px";
    weatherImageElem.style.width = "175px";
}

const clearWeatherImg = () => {
    const weatherImageElem = document.getElementById('weather_img');
    weatherImageElem.src = "";
    weatherImageElem.style.height = "";
    weatherImageElem.style.width = "";
}

const updateWeatherDesc = (weatherJsonVal) => {
    const weatherDescElem = document.getElementById('weather_desc');
    weatherDescElem.innerText = "Condition: " + weatherJsonVal;
}

const updateWeatherTemps = (weatherJsonVal1, weatherJsonVal2, weatherJsonVal3, weatherJsonVal4) => {
    const weatherTempElem = document.getElementById('weather_temp');
    if (weatherJsonVal1 == "Searching data...") {
        weatherTempElem.innerHTML = "Temperature: Searching data..." 
    } else if (weatherJsonVal1 == "No Data") {
        weatherTempElem.innerHTML = "Temperature: No Data Found."
    } else {
        weatherTempElem.innerHTML = "Temperature: " + weatherJsonVal1 + ` ${fahrenheitEntity}` + " / " + weatherJsonVal3 + ` ${celciusEntity}`;
    }
    

    const weatherRFTempElem = document.getElementById('weather_rftemp');
    if (weatherJsonVal3 == "Searching data...") {
        weatherRFTempElem.innerHTML = "Real Feel: Searching data..."
    } else if (weatherJsonVal3 == "No Data") {
        weatherRFTempElem.innerHTML = "Real Feel: No Data Found."
    } else {
        weatherRFTempElem.innerHTML = "Real Feel: " + weatherJsonVal2 + ` ${fahrenheitEntity}` + " / " + weatherJsonVal4 + ` ${celciusEntity}`;
    } 
}

const updateWeatherHumidity = (weatherJsonVal) => {
    const weatherHumidity = document.getElementById('weather_humidity');
    if (weatherJsonVal ==  "Searching data...") {
        weatherHumidity.innerHTML = "Humidity: Searching data..."
    }
    else if (weatherJsonVal == 'No Data') {
        weatherHumidity.innerHTML = "Humidity: No Data Found."
    }
    else {
        weatherHumidity.innerHTML = "Humidity: " + `${weatherJsonVal} %`;
    }
    
}

const updateWeatherWind = (weatherJsonVal) => {
    const weatherWind = document.getElementById('weather_wind');
    if (weatherJsonVal ==  "Searching data...") {
        weatherWind.innerHTML = "Winds: Searching data..."
    }
    else if (weatherJsonVal == 'No Data') {
        weatherWind.innerHTML = "Winds: No Data Found."
    } else {
        weatherWind.innerHTML = "Winds: " + `${weatherJsonVal} mph`;
    }
    
}

const updateWeatherFound = (weatherJson) => {
    updateWeatherLocation(weatherJson.locationDetail);
    // updateWeatherImg(weatherJson.weatherImgCode, weatherJson.isDay);
    updateWeatherImg(weatherJson.weatherImg);
    updateWeatherDesc(weatherJson.weatherDesc);
    updateWeatherTemps(weatherJson.weatherTempF, weatherJson.weatherRFTempF, weatherJson.weatherTempC, weatherJson.weatherRFTempC);
    updateWeatherHumidity(weatherJson.weatherHumidity);
    updateWeatherWind(weatherJson.weatherWind);
}

const updateWeatherNotFound = (weatherJson) => {
    const errorText = 'No Data';
    if (weatherJson.errorMsg == "Parameter q is missing.") {
        updateWeatherLocation('The inputted location is not accepted. Please try again.');
    } else {
        updateWeatherLocation(`${weatherJson.errorMsg} Please try again.`); // Given error message Wwill show no matching data.
    }
    

    clearWeatherImg();
    //add a no images found image here

    updateWeatherDesc(errorText);
    updateWeatherTemps(errorText, errorText, errorText, errorText);
    updateWeatherHumidity(errorText);
    updateWeatherWind(errorText);
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

const setLoadingWeatherDisplayElem = () => {
    updateWeatherLocation("Searching for inputted location...");
    clearWeatherImg();
    updateWeatherDesc("Searching data...");
    updateWeatherTemps("Searching data...", "Searching data...", "Searching data...", "Searching data...");
    updateWeatherHumidity("Searching data...");
    updateWeatherWind("Searching data...");
    
}
export { updateWeatherDisplayElems, setLoadingWeatherDisplayElem }