const weatherDisplay = () => {
    const section = document.createElement('div');

    const weatherLocation = document.createElement('h2');
    weatherLocation.id = "weather_location";

    const weatherImage = document.createElement('img');
    weatherImage.id = 'weather_img';
    const weatherDesc = document.createElement('h2');
    weatherDesc.id = 'weather_desc'

    const weatherTemp = document.createElement('h2');
    weatherTemp.id = 'weather_temp';

    const weatherRealFeelTempt = document.createElement('h2');
    weatherRealFeelTempt.id = 'weather_rftemp';

    section.append(
        weatherLocation,
        weatherImage,
        weatherDesc,
        weatherTemp,
        weatherRealFeelTempt
    );
    
    return section;
}

export { weatherDisplay }