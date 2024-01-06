import './frontEnd/styles.css'
import { locationInputSection, displayWeatherSection, footerSection} from './frontEnd/pageSection';
import { grabWeatherInfoOnSubmit } from './events/locationSubmit';
import { githubButtonClick } from "./events/githubClick";

console.log('hello, world');

const initPage = () => {
    // headSection();
    locationInputSection();
    displayWeatherSection();
    footerSection();
    githubButtonClick();

    grabWeatherInfoOnSubmit();
}

initPage();