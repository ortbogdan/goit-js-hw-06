// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів
//  в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити,
//   колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor 
// для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputRef = document.querySelector('input[type="number"]');
const boxesRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]')


createBtnRef.addEventListener('click', onClickAddBoxes)
destroyBtnRef.addEventListener('click', onClickDestroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    const color = getRandomHexColor();
    
    boxesRef.append(box);
    box.style.backgroundColor = color;
    box.style.width = '30px';
    box.style.height = '30px';
  }
}

function onClickAddBoxes(event) {
  const amount = inputRef.value;
  createBoxes(amount)
}
function onClickDestroyBoxes(event) {
  boxesRef.childNodes.forEach(box => box.remove())
  console.log(boxesRef.childNodes)
  // boxesRef.children.remove()
}
// createBoxes(5)
// console.dir(boxesRef.childNodes)