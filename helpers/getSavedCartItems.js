const getSavedCartItems = () => {
  // seu código aqui
  const valueStorage = localStorage.getItem('cartItems');
  return valueStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
