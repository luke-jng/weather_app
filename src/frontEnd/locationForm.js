import searchIcon from '../images/svgicons/search_icon.svg'
import locationIcon from '../images/svgicons/location_icon.svg'

const lineBreak = () => document.createElement('br');

const inputLocationForm = () => {
    const inputForm = document.createElement('form');
    inputForm.id = 'location_input_form';

    const locationInput = document.createElement('input');
    locationInput.id = 'location_input';
    locationInput.name = 'location_input';
    locationInput.placeholder = "e.g London";

    const locationInputLabel = document.createElement('label');
    locationInputLabel.id = "location_input_label";
    locationInputLabel.setAttribute('for', 'location_Input');

    const locationSVG = document.createElement('img');
    locationSVG.src = `${locationIcon}`;
    locationSVG.alt = "location_icon";
    locationSVG.style.height = '25px';
    locationSVG.style.width = '25px';

    locationInputLabel.append(locationSVG);

    const submitLocationInput = document.createElement('button');
    submitLocationInput.id = 'submit_location_button';
    submitLocationInput.type = 'submit';

    const submitSVG = document.createElement('img');
    submitSVG.src = searchIcon;
    submitSVG.style.height = '25px';
    submitSVG.style.width = '25px';

    submitLocationInput.append(submitSVG);

    inputForm.append(
        locationInputLabel,
        locationInput,
        submitLocationInput
    )

    return inputForm;
}


export {inputLocationForm}