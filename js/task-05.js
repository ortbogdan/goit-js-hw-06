const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

const onInputChangeName = (event) => {
    spanEl.textContent = event.currentTarget.value;
}

inputEl.addEventListener('input', onInputChangeName);

