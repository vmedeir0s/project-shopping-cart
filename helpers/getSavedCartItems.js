const getSavedCartItems = () => {
  // seu código aqui
  const positionOl = document.querySelector('.cart__items');
  const valueStorage = localStorage.getItem('cartItems');
  positionOl.innerHTML = valueStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
