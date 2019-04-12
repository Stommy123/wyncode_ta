const basePrice = 10;
const ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
const renderPepperonni = _ =>
  $(".pep").each((_, item) => (item.style.visibility = state.pepperonni ? "visible" : "hidden"));

const renderMushrooms = _ =>
  $(".mushroom").each((_, item) => (item.style.visibility = state.mushrooms ? "visible" : "hidden"));

const renderGreenPeppers = _ =>
  $(".green-pepper").each((_, item) => (item.style.visibility = state.greenPeppers ? "visible" : "hidden"));

const renderWhiteSauce = _ => $(".sauce")[state.whiteSauce ? "addClass" : "removeClass"]("sauce-white");

const renderGlutenFreeCrust = _ => $(".crust")[state.glutenFreeCrust ? "addClass" : "removeClass"]("crust-gluten-free");

const renderButtons = _ => $(".btn").click(e => $(e.target).toggleClass("active"));

const renderPrice = _ => {
  const total = Object.keys(state).reduce(
    (acc, key) => {
      if (state[key]) {
        const { price, name } = ingredients[key];
        acc.totalPrice += price;
        acc.activeIngredients.push(`<li>$${price} ${name}</li>`);
      }
      return acc;
    },
    { totalPrice: basePrice, activeIngredients: [] }
  );
  $(".price ul").html(total.activeIngredients);
  $(".price strong").html(total.totalPrice);
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
renderButtons();

$(".btn-pepperonni").click(_ => {
  state.pepperonni = !state.pepperonni;
  renderEverything();
});

$(".btn-mushrooms").click(_ => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

$(".btn-green-peppers").click(_ => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

$(".btn-sauce").click(_ => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

$(".btn-crust").click(_ => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
