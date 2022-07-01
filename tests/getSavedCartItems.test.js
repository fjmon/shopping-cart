const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Testa se ao executar getSavedCartItems o método localStorage.getItem é chamado', () => {    
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Test se ao executar getSavedCartItems, localStorage.getItem é chamado com "cartItems" como parâmetro', () => {    
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })

});
