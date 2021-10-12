
let counterValue = 0;

const valueEl = document.querySelector('span#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', () => { counterValue += 1; valueEl.textContent = counterValue; })
decrementBtn.addEventListener('click', () => { counterValue -= 1; valueEl.textContent = counterValue; })