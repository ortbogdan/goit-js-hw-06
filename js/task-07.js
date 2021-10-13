
const inputRef = document.querySelector('input#font-size-control');
const spanRef = document.querySelector('span#text');

const onTargetChangeSize = event =>
    spanRef.style.fontSize = event.currentTarget.value + 'px';

inputRef.addEventListener('input', onTargetChangeSize);