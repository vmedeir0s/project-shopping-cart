const saveCartItems = () => {
  // seu código aqui
  const positionOl = document.querySelector('.cart__items');
  localStorage.setItem('cartItems', positionOl.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
