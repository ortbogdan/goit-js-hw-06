const inputRef = document.querySelector('#validation-input');

const onInputInBlur = event => {
    if (event.currentTarget.value.length <= inputRef.dataset.length && event.currentTarget.value) {
        inputRef.classList.add('valid');
        if (event.currentTarget.classList.contains('invalid')) {
            inputRef.classList.remove('invalid');
        }
}
    else {
        if (event.currentTarget.classList.contains('valid')) {
            inputRef.classList.remove('valid');
        }
     inputRef.classList.add('invalid');   
}
}

inputRef.addEventListener('blur', onInputInBlur);
