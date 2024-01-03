const fahrenheitEntity = '&deg;F';
const celciusEntity = '&deg;C';

const updateWeatherLocation = (weatherJsonVal) => {
    const weatherLocElem = document.getElementById('weather_location');
    weatherLocElem.innerText = weatherJsonVal;
}

const updateWeatherImg = (weatherJsonVal) => {
    const weatherImageElem = document.getElementById('weather_img');
    weatherImageElem.src = 'https:'+ weatherJsonVal;
    weatherImageElem.style.height = "100px";
    weatherImageElem.style.width = "100px";
}

const clearWeatherImg = () => {
    const weatherImageElem = document.getElementById('weather_img');
    weatherImageElem.src = "";
    weatherImageElem.style.height = "";
    weatherImageElem.style.width = "";
}

const updateWeatherDesc = (weatherJsonVal) => {
    const weatherDescElem = document.getElementById('weather_desc');
    weatherDescElem.innerText = "Current Condition: " + weatherJsonVal;
}

const updateWeatherTemps = (weatherJsonVal1, weatherJsonVal2, tempDegree) => {
    const weatherTempElem = document.getElementById('weather_temp');
    weatherTempElem.innerHTML = "Current Temperature: " + weatherJsonVal1 + ` ${tempDegree}`;

    const weatherRFTempElem = document.getElementById('weather_rftemp');
    weatherRFTempElem.innerHTML = "Current Real Feel: " + weatherJsonVal2 + ` ${tempDegree}`;
}

const updateWeatherFound = (weatherJson) => {
    updateWeatherLocation(weatherJson.locationDetail);
    updateWeatherImg(weatherJson.weatherImg);
    updateWeatherDesc(weatherJson.weatherDesc);
    updateWeatherTemps(weatherJson.weatherTemp, weatherJson.weatherRFTemp, fahrenheitEntity);
}

const updateWeatherNotFound = (weatherJson) => {
    const errorText = 'No Data';

    updateWeatherLocation(weatherJson.errorMsg);

    clearWeatherImg();
    //add a no images found image here

    updateWeatherDesc(errorText);
    updateWeatherTemps(errorText, errorText, "");
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
    updateWeatherTemps("Searching data...", "Searching data...", "");
}
export { updateWeatherDisplayElems, setLoadingWeatherDisplayElem }