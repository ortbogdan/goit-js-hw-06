const listEL = document.querySelector('ul#categories');
console.log('Number of categories:', listEL.querySelectorAll('li.item').length);

const itemEl = document.querySelectorAll('li.item')
itemEl.forEach( item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length)
});
