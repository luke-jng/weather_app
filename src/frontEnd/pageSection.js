import { inputLocationForm } from "./locationForm";
import { weatherDisplay } from "./weatherDisplay";

// const headSection = () => {
//     const contentDiv = document.getElementById('content');

//     const headSectionContainer = document.createElement('div');
//     headSectionContainer.id = 'head_section';

//     const appNameElem = document.createElement('h1');
//     appNameElem.id = 'app_name';
//     appNameElem.innerText = 'Weather App';

//     const appDescElem = document.createElement('h3');
//     appDescElem.id = 'app_name_desc';
//     appDescElem.innerText = 'Search up weather of a location of your interest!'

//     headSectionContainer.append(appNameElem, appDescElem);
//     contentDiv.append(headSectionContainer);
// }

const locationInputSection = () => {

    const contentDiv = document.getElementById('content');

    const locFormSectionContainer = document.createElement('div');
    locFormSectionContainer.id = 'loc_form_section';
    locFormSectionContainer.append(inputLocationForm());

    contentDiv.append(locFormSectionContainer);
}

const displayWeatherSection = () => {
    const contentDiv = document.getElementById('content');

    const weatherDisplaySectionContainer = document.createElement('div');
    weatherDisplaySectionContainer.id = 'weather_display_section';
    weatherDisplaySectionContainer.append(weatherDisplay());
    
    contentDiv.append(weatherDisplaySectionContainer);
}

const footerSection = () => {
    const contentDiv = document.getElementById('content');

    const footerSectionContainer = document.createElement('div');
}
export {locationInputSection, displayWeatherSection }