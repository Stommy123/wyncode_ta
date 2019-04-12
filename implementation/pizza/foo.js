const basePrice = 10;
const ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};
const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

const pepperonnis = [...document.getElementsByClassName('pep')];
const mushrooms = [...document.getElementsByClassName('mushroom')];
const greenPeppers = [...document.getElementsByClassName('green-pepper')];
const whiteSauce = document.querySelector('.sauce');
const crust = document.querySelector('.crust');
const buttons = [...document.getElementsByClassName('btn')];
const ingredientList = document.querySelector('.price ul');
const totalPrice = document.querySelector('.price strong');

const renderPepperonni = _ =>
  pepperonnis.forEach(item => (item.style.visibility = state.pepperonni ? 'visible' : 'hidden'));

const renderMushrooms = _ =>
  mushrooms.forEach(item => (item.style.visibility = state.mushrooms ? 'visible' : 'hidden'));

const renderGreenPeppers = _ =>
  greenPeppers.forEach(item => (item.style.visibility = state.greenPeppers ? 'visible' : 'hidden'));

const renderWhiteSauce = _ => whiteSauce['classList'][state.whiteSauce ? 'add' : 'remove']('sauce-white');

const renderGlutenFreeCrust = _ => crust['classList'][state.glutenFreeCrust ? 'add' : 'remove']('crust-gluten-free');

const renderButtons = _ =>
  buttons.forEach(btn => btn.addEventListener('click', e => e.target.classList.toggle('active')));

const renderPrice = _ => {
  ingredientList.innerHTML = String();
  const total = Object.keys(state).reduce((acc, key) => {
    if (state[key]) {
      const { price, name } = ingredients[key];
      acc += price;
      const ingredient = document.createElement('li');
      ingredient.innerHTML = `$${price} ${name}`;
      ingredientList.appendChild(ingredient);
    }
    return acc;
  }, basePrice);
  totalPrice.innerHTML = total;
};

const renderEverything = _ => {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderPrice();
};
renderEverything();

document.querySelector('.btn-pepperonni').addEventListener('click', _ => {
  state.pepperonni = !state.pepperonni;
  renderEverything();
});

document.querySelector('.btn-mushrooms').addEventListener('click', _ => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn-green-peppers').addEventListener('click', _ => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn-sauce').addEventListener('click', _ => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn-crust').addEventListener('click', _ => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
