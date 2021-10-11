const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientListItem = (ingredients = []) => {
    const listEl = document.querySelector("ul#ingredients");
  ingredients.forEach(ingredien => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredien;
    itemEl.classList.add('item')
    listEl.append(itemEl);
  })
}
makeIngredientListItem(ingredients);




