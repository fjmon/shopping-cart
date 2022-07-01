const fetchProducts = async (produtos) => {
  try {
  if (!produtos) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produtos}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
} catch (error) {
  return error;
}
  // seu código aqui
};
fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}