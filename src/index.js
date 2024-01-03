import './frontEnd/styles.css'
import { locationInputSection, displayWeatherSection} from './frontEnd/pageSection';
import { grabWeatherInfoOnSubmit } from './events/locationSubmit';

console.log('hello, world');

const initPage = () => {
    // headSection();
    locationInputSection();
    displayWeatherSection();

    grabWeatherInfoOnSubmit();
}

initPage();