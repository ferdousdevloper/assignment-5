const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const submitButton = document.getElementById('submitButton');

// function submitForm() {
//     // Perform any desired actions with the form data
//     alert('Form submitted!');
// }

function checkInputs() {
    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    

    if (nameValue !== '' && phoneValue !== '') {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

nameInput.addEventListener('input', checkInputs);
phoneInput.addEventListener('input', checkInputs);

