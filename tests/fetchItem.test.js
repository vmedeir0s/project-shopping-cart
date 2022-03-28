require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  test('Verifica se "fetchItem" é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  test('Verifica se executado a função "fetchItem" com o argumento do item "MLB1615760527" é chamado "fetch"', async ()=> {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('Verifica se ao chamar a função "fetchItem" com o argumento do item "MLB1615760527" a função "fetch" utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527" ', async ()=> {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  test('Verifica se o retorno da função "fetchItem" é uma estrutura de dados igual ao objeto "item"', async () => {
    const expectedResult = await fetchItem('MLB1615760527');
    expect(expectedResult).toEqual(item);
  });

  test('Verifica se ao chamar a função "fetchItem" sem argumento, retorna um erro', async ()=> {
    try {
      await fetchItem();
    } catch(erro) {
      expect(erro).toEqual(new Error('you must provide an url'));
    }
  });
});
