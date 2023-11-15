const lineBreak = () => document.createElement('br');

const inputLocationForm = () => {
    const inputForm = document.createElement('form');
    inputForm.id = 'location_input_form';

    const locationInput = document.createElement('input');
    locationInput.id = 'location_input';
    locationInput.name = 'location_input';
    locationInput.placeholder = "e.g London";

    const locationInputLabel = document.createElement('label');
    locationInputLabel.setAttribute('for', 'location_Input');
    locationInputLabel.innerText = "Location: ";

    const submitLocationInput = document.createElement('button');
    submitLocationInput.type = 'submit';
    submitLocationInput.innerText = "Check";

    inputForm.append(
        locationInputLabel,
        locationInput,
        lineBreak(),
        submitLocationInput
    )

    return inputForm;
}


export {inputLocationForm}