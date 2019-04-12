const deleteBtns = [...document.getElementsByClassName('btn-delete')];
const createBtn = document.getElementById('create-btn');
const calculateBtn = document.getElementById('calculate-btn');
const updatePriceBtn = document.getElementById('updatePrice');
const allProducts = document.getElementById('all-products');
const total = document.querySelector('#total span');

const calculatePrices = _ => {
  const unitPrice = [...document.getElementsByClassName('unit-cost')].map(item => Number(item.innerHTML) || 0);
  const unitQuantity = [...document.getElementsByClassName('unit-quantity')].map(item => Number(item.value) || 0);
  const totalPrice = [...document.getElementsByClassName('total-unit-price')].reduce((acc, item, i) => {
    const itemTotal = unitPrice[i] * unitQuantity[i];
    item.innerHTML = `$ ${itemTotal}`;
    acc += itemTotal;
    return acc;
  }, Number());
  total.innerHTML = `$ ${totalPrice}`;
};

const deleteItem = e => e.target.parentElement.parentElement.remove();

const createProductRowNode = _ => {
  const rowNodeWrapper = document.createElement('div');
  rowNodeWrapper.setAttribute('class', 'product-info');
  return rowNodeWrapper;
};

const createProductNode = _ => {
  const productNodeWrapper = document.createElement('div');
  productNodeWrapper.setAttribute('class', 'product');
  const productName = document.getElementById('create-product').value || String();
  const productSpan = document.createElement('span');
  productSpan.innerHTML = productName;
  productNodeWrapper.appendChild(productSpan);
  return productNodeWrapper;
};

const createPriceNode = _ => {
  const priceNodeWrapper = document.createElement('div');
  const price = document.getElementById('create-price').value || 0;
  const priceSpan = document.createElement('span');
  priceSpan.setAttribute('class', 'unit-cost');
  priceSpan.textContent = price;
  priceNodeWrapper.appendChild(priceSpan);
  return priceNodeWrapper;
};

const createQuantityNode = _ => {
  const inputWrapper = document.createElement('div');
  const inputForm = document.createElement('form');
  const inputLabel = document.createElement('label');
  inputLabel.setAttribute('for', 'quantity');
  inputLabel.innerHTML = 'QTY';
  const input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('class', 'unit-quantity');
  input.setAttribute('placeholder', '0');
  const formContent = [inputLabel, input];
  formContent.forEach(item => inputForm.appendChild(item));
  inputWrapper.appendChild(inputForm);
  return inputWrapper;
};

const createDeleteButtonNode = _ => {
  const buttonWrapper = document.createElement('div');
  const button = document.createElement('button');
  button.setAttribute('class', 'btn btn-delete');
  button.innerHTML = 'Delete';
  buttonWrapper.appendChild(button);
  return buttonWrapper;
};

const createNewItem = _ => {
  const newItemContainer = createProductRowNode();
  const newProductContent = [createProductNode(), createPriceNode(), createQuantityNode(), createDeleteButtonNode()];
  newProductContent.forEach(node => newItemContainer.appendChild(node));
  allProducts.appendChild(newItemContainer);
};

window.onload = _ => {
  calculateBtn.addEventListener('click', calculatePrices);
  createBtn.addEventListener('click', createNewItem);
  deleteBtns.forEach(btn => (btn.onclick = deleteItem));
};
