const positionOl = document.querySelector('.cart__items');

const atualizaPreco = () => {
  const arrayLi = document.querySelectorAll('.cart__item');
  const positionTotal = document.querySelector('.total-price');
  if (arrayLi.length) {
    let total = 0;
    arrayLi.forEach((elemento) => {
      const stringInner = elemento.innerText;
      const stringPrice = stringInner.split('$');
      const price = Number(stringPrice[1]);
      total += price;
    });
    positionTotal.innerText = Number(total.toFixed(2));
  } else {
    positionTotal.innerHTML = '0,00';
  }
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
  event.target.remove();
  saveCartItems(positionOl.innerHTML);
  atualizaPreco();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const adicionaItemCarrinho = async (item) => {
  const positionCar = document.querySelector('.cart__items');
  positionCar.appendChild(item);
  atualizaPreco();
};

const eventButton = async (event) => {
  const elementoPai = event.target.parentElement;
  const valueSku = getSkuFromProductItem(elementoPai);
  const itemBruto = await fetchItem(valueSku);
  const { id, title, price } = itemBruto;
  const objeto = {
    sku: id,
    name: title,
    salePrice: price,
  };
  adicionaItemCarrinho(createCartItemElement(objeto));
  saveCartItems(positionOl.innerHTML);
};

const setEvent = () => {
  const arrayButton = document.querySelectorAll('.item__add');
  arrayButton.forEach((elemento) => elemento.addEventListener('click', eventButton));
};

const getProducts = async () => {
  const results = await fetchProducts('computador');
  const positionSection = document.querySelector('.items');
  results.results.forEach((element) => {
    const objeto = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    const result = createProductItemElement(objeto);
    positionSection.appendChild(result); 
  });
};

const clearCart = () => {
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', () => {
    positionOl.innerHTML = '';
    atualizaPreco();
  });
};

const setEventInLi = () => {
  const arrayLi = document.querySelectorAll('.cart__item');
  arrayLi.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

window.onload = async () => { 
  await getProducts();
  positionOl.innerHTML = await getSavedCartItems();
  await setEvent();
  await setEventInLi();
  await atualizaPreco();
  await clearCart();
};