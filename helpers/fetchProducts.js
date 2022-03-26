const fetchProducts = async (param) => {
  // seu código aqui
  if (!param) {
    throw new Error('you must provide an url');
  }
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
