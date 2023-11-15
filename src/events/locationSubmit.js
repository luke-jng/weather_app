import { getWeather } from '../fetchingDetails'
import { updateWeatherDisplayElems } from './updateWeatherDisplay'

const grabWeatherInfoOnSubmit = () => {
    const locInputForm = document.getElementById('location_input_form');

    //event listeners can take async functions too
    locInputForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formVals = new FormData(locInputForm);
        const returnedWeatherJosn = await getWeather(formVals.get('location_input'));
        updateWeatherDisplayElems(returnedWeatherJosn);
        ;
    })
}

export {grabWeatherInfoOnSubmit}