require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const { sort } = require('../mocks/search');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  test('Teste se fetchProducts é uma função', ()=> {
    expect(typeof fetchProducts).toBe('function');
  });

  test('Verifica se ao execultar a função passando "computador" como argumento é chamado a função fetch', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });

  test('Ao chamar a função com o argumento "computador" verifica o endpoint', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('O retorno da função é uma estrutura de dados igual a "computadorSearch"', async () => {
    const expectResult = await fetchProducts('computador')
    expect(expectResult).toEqual(computadorSearch);
  });

  test('Ao chamar a função sem argumentos, retorna um erro', async () => {
    try {
      await fetchProducts();
    } catch(erro) {
      expect(erro).toEqual(new Error('you must provide an url'));
    }
  });
});
