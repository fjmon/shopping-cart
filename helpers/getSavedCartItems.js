const getSavedCartItems = () => {
  // seu código aqui
  if (localStorage.getItem('cartItems') !== null) {
    return localStorage.getItem('cartItems');
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
