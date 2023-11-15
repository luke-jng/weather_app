import { inputLocationForm } from "./locationForm";
import { weatherDisplay } from "./weatherDisplay";

const locationInputSection = () => {

    const contentDiv = document.getElementById('content');

    const locFormSection = document.createElement('div');
    locFormSection.id = 'loc_form_section';
    locFormSection.append(inputLocationForm());

    contentDiv.append(locFormSection);
}

const displayWeatherSection = () => {
    const contentDiv = document.getElementById('content');

    const weatherDisplaySection = document.createElement('div');
    weatherDisplaySection.id = 'weather_display_section';
    weatherDisplaySection.append(weatherDisplay());
    
    contentDiv.append(weatherDisplaySection);
}
export { locationInputSection, displayWeatherSection }