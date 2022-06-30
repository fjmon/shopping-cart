const fetchProducts = async (produtos) => {
  if (!produtos) {
    return new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produtos}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
    // seu código aqui
  };

  if (typeof module !== 'undefined') {
    module.exports = {
      fetchProducts,
    };
  }