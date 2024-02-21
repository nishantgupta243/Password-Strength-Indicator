const inputField = document.querySelector('#password');
const outputField = document.querySelector('#output');

inputField.addEventListener('input', () => {
    console.log(inputField.value);
    let password = inputField.value;
    if (password.length < 8) {
        outputField.textContent = 'Password is too short';
        outputField.style.color = 'blue';
    } else {
        outputField.textContent = 'Password is too long';
        outputField.style.color = 'green';

        //a-z
        //A-Z
        //0-9
        //Special Characters !@#$%^&*()_+{}|:"<>?[]\;',.

        if (password.search(/[a-z]/) == -1) {
            outputField.textContent = 'Lowercase letter is missing';
            outputField.style.color = 'green';
        } else if (password.search(/[A-Z]/) == -1) {
            outputField.textContent = 'Uppercase letter is missing';
            outputField.style.color = 'blue';
        } else if (password.search(/[0-9]/) == -1) {
            outputField.textContent = 'Number is missing';
            outputField.style.color = 'orange';
        } else if (password.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\{\}\|\:\"\<\>\?\[\]\;\'\,\.]/) == -1) {
            outputField.textContent = 'Special character is missing';
            outputField.style.color = 'violet';
        } else {
            outputField.textContent = 'Password is strong';
            outputField.style.color = 'green';
        }
    }
});