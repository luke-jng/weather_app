import { getWeather } from './fetchingDetails'
import { setLoadingWeatherDisplayElem, updateWeatherDisplayElems } from './updateWeatherDisplay'
//
const grabWeatherInfoOnSubmit = () => {
    const locInputForm = document.getElementById('location_input_form');

    //event listeners can take async functions too
    locInputForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        setLoadingWeatherDisplayElem();
        const formVals = new FormData(locInputForm);
        // console.log("form vals", formVals, 'escaped form vals:', escapeEntitiesInString(formVals.get('location_input')));
        const returnedWeatherJosn = await getWeather(escapeEntitiesInString(formVals.get('location_input')));
        updateWeatherDisplayElems(returnedWeatherJosn);
        ;
    })
}

const escapeEntitiesInString = (formInput) => {
    let newString = "";
    for (let i =0; i < formInput.length; i++) {
        if (formInput[i] == '&') {
            newString += '&amp;';
        }
        else if (formInput[i] == '<') {
            newString += '&lt;';
        }
        else if (formInput[i] == '>') {
            newString += '&gt;';
        }
        else if (formInput[i] == '"') {
            newString += '&quot;';
        }
        else if (formInput[i] == "'") {
            newString += '&#39;';
        }
        else {
            newString += formInput[i];
        }
    }
    return newString;
}
export {grabWeatherInfoOnSubmit}