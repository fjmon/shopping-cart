require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  fail('Teste vazio');
  it('Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  });
  it('Executa fetchItem com argumento do item "MLB1615760527" e testa se fetch é chamada', async () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
  });
  it('Testa se ao chamar fetchItem com argumento do item "MLB1615760527" fetch utiliza o endpoint', async () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Teste se retorno de fetchItem com argumento é uma estrutura de dados igual ao objeto item', async () => {
    expect(fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Testa se ao chamar fetchItem sem argumento retorna erro com mensagem: "You must provide an url"', async () => {    
    expect(fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
