
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
  
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    const color = getRandomHexColor();
    
    box.style.width = size + 'px'
    box.style.height = size + 'px'
    box.style.backgroundColor = color;

    boxesRef.append(box);

    size += 10;
  }
}

function onClickAddBoxes(event) {
  const amount = inputRef.value;
  createBoxes(amount)
}
function onClickDestroyBoxes(event) {
  const amount = inputRef.value;
  for (let i = 1; i <= amount; i += 1) {
    if (boxesRef.querySelector('div')) {
      boxesRef.querySelector('div').remove()
    }
  }
}
