import './styles.css'
import { locationInputSection, displayWeatherSection } from './pageSection';
import { grabWeatherInfoOnSubmit } from './events/locationSubmit';

console.log('hello, world');

locationInputSection();
displayWeatherSection();

grabWeatherInfoOnSubmit();

// const API_KEY = process.env.WEATHER_APP_API_KEY;

// console.log("Hello", process.env.WEATHER_APP_API_KEY);
// grabbing the api key works in index.js when loaded to browser; it prints in console