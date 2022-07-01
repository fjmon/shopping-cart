const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Testa se ao executar saveCartItems o método localStorage.setItem é chamado', () => {        
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Testa se ao executar saveCartItems o método é chamado com "cartItems" e o argumento para saveCartItems', () => {    
    const cart = '<ol><li>Item</li></ol>';
    saveCartItems(cart);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', cart)
  })
});
