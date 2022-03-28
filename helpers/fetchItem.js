const fetchItem = async (idItem) => {
   // seu código aqui
  if (!idItem) {
    throw new Error('you must provide an url');
  }
    const url = `https://api.mercadolibre.com/items/${idItem}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
