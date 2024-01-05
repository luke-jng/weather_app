import './frontEnd/styles.css'
import { locationInputSection, displayWeatherSection, footerSection} from './frontEnd/pageSection';
import { grabWeatherInfoOnSubmit } from './events/locationSubmit';

console.log('hello, world');

const initPage = () => {
    // headSection();
    locationInputSection();
    displayWeatherSection();
    footerSection();

    grabWeatherInfoOnSubmit();
}

initPage();