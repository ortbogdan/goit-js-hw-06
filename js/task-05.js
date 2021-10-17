const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

const onInputChangeName = (event) => {
    event.currentTarget.value ?
        spanEl.textContent = event.currentTarget.value.trim() : spanEl.textContent = 'Anonymous';
}

inputEl.addEventListener('input', onInputChangeName);

