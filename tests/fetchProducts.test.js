require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it('Testa se ao passar o argumento "computador" a função fetch é chamada', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled()
  })
  it('Testa se ao chamar a função fetchProducts com o argumento "computador" a função fetch utiliza endpoint', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('Testa se retorno da fetchProducts com argumento "computador" é igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch)
  })
  it('Testa se ao chamar a função fetchProducts sem argumento retorna um erro: "You must provide an url"', async () => {
    // expect(() => fetchProducts()).toThrowError('You must provide an url')
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'))
  })

})
