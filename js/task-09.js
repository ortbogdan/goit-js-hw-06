
const buttonRef = document.querySelector('button.change-color');
const spanRef = document.querySelector('span.color');

buttonRef.addEventListener('click', onClickChangeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onClickChangeColor(event) {
  const color = getRandomHexColor() 
  spanRef.textContent = color;
  document.body.style.backgroundColor = color; 
}

