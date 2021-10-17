
const inputRef = document.querySelector('input[type="number"]');
const boxesRef = document.querySelector('div#boxes');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]')


createBtnRef.addEventListener('click', onClickAddBoxes)
destroyBtnRef.addEventListener('click', onClickDestroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let size = 30;
  const boxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    
    box.style.width = size + 'px'
    box.style.height = size + 'px'
    box.style.backgroundColor = getRandomHexColor();

    size += 10;
    boxes.push(box)
  }
  boxesRef.append(...boxes);
}

function onClickAddBoxes(event) {
  const amount = inputRef.value;
  createBoxes(amount)
}
function onClickDestroyBoxes(event) {
  boxesRef.innerHTML = '';
}
