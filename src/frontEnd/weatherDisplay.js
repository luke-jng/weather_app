const weatherDisplay = () => {
    const section = document.createElement('div');
    section.id = "weather_display_contents";

    const weatherLocation = document.createElement('h2');
    weatherLocation.id = "weather_location";
    weatherLocation.innerText = "Please enter a location of your interest!"

    const weatherImage = document.createElement('img');
    weatherImage.id = "weather_img";

    const weatherDetails = document.createElement('div');
    weatherDetails.id = "weather_display_content_details";

    const weatherDesc = document.createElement('h2');
    weatherDesc.id = 'weather_desc'
    const weatherTemp = document.createElement('h2');
    weatherTemp.id = 'weather_temp';
    const weatherRealFeelTempt = document.createElement('h2');
    weatherRealFeelTempt.id = 'weather_rftemp';

    const weatherHumidity = document.createElement('h2');
    weatherHumidity.id = 'weather_humidity';
    const weatherWind = document.createElement('h2');
    weatherWind.id = 'weather_wind';

    weatherDetails.append(        
        weatherDesc,
        weatherTemp,
        weatherRealFeelTempt,
        weatherHumidity,
        weatherWind
    );

    section.append(
        weatherLocation,
        weatherImage,
        weatherDetails
    );
    
    return section;
}

export { weatherDisplay }