const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('Ao executar "saveCartItems" com o argumento "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled()
  });

  test('Ao executar "saveCartItems" com o argumento "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado com dois parâmetros, "cartItems" e "valor do argumento"', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems','<ol><li>Item</li></ol>');
  });
  
});
