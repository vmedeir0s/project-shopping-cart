require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const { sort } = require('../mocks/search');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  test('Teste se fetchProducts é uma função', (done)=> {
    expect(typeof fetchProducts).toBe('function');
    done();
  });

  test('Verifica se ao execultar a função passando "computador" como argumento é chamado a função fetch', (done) => {
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
    done();
  });

  test('Ao chamar a função com o argumento "computador" verifica o endpoint', () => {
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('O retorno da função é uma estrutura de dados igual a "computadorSearch"', async () => {
    const result = await fetchProducts('computador')
    expect(result).toEqual(computadorSearch);
  });

  test('Ao chamar a função sem argumentos, retorna um erro', () => {
    fail('Teste vazio');
  });
});
