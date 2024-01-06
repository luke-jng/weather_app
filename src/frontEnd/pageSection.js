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

    const footerSectionContainer = document.createElement('footer');
    footerSectionContainer.id = "footer_section";

    const footerCols = document.createElement('div');
    footerCols.id = "footer_row";

    const footerCol1 = document.createElement('div');
    footerCol1.id = 'footer_title_desc_col';
    const appTitle = document.createElement('h3');
    appTitle.id = 'footer_appTitle';
    appTitle.innerText = 'Weather App'
    const appDesc = document.createElement('p');
    appDesc.id = 'footer_appDesc';
    appDesc.innerHTML = 'A simple weather application to tell the current weather of a entered location. Based on The Odin Project&#39;s <a id="odin_link" href="https://www.theodinproject.com/lessons/node-path-javascript-weather-app">Weather App</a> Project.'
    footerCol1.append(
        appTitle,
        appDesc
    );

    const footerCol2 = document.createElement('div');
    footerCol2.id = 'footer_links_col';
    const gitHubButton = document.createElement('button');
    gitHubButton.id = 'footer_github_link_button';
    gitHubButton.innerHTML = '<a id="github_link">My GitHub</a>';
    footerCol2.append(gitHubButton);


    footerCols.append(footerCol1, footerCol2);

    footerSectionContainer.append(footerCols);
    contentDiv.append(footerSectionContainer);
}
export {locationInputSection, displayWeatherSection, footerSection }