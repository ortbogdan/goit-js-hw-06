const inputRef = document.querySelector('#validation-input');

const onInputInBlur = event => event.currentTarget.value.length <= inputRef.dataset.length && event.currentTarget.value.length != '' ? inputRef.classList.add('valid') : inputRef.classList.add('invalid');

inputRef.addEventListener('blur', onInputInBlur);
