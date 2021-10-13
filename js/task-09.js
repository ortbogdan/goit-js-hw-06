
const buttonRef = document.querySelector('button.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('span.color');

buttonRef.addEventListener('click', onClickChangeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onClickChangeColor(event) {
  const color = getRandomHexColor() 
  spanRef.textContent = color;
  bodyRef.style.backgroundColor = color; 
}