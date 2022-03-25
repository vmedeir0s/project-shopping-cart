const fetchItem = async (idItem) => {
  try {
    const url = `https://api.mercadolibre.com/items/${idItem}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('algum erro');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
