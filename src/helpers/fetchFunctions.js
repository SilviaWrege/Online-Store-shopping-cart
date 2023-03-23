export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (computador) => {
  try {
    const URL = `https:api.mercadolibre.com/sites/MLB/search?q=${computador}`;
    const endPoint = await fetch(URL);
    console.log(endPoint);
    const data = await endPoint.json();
    const listOfProducts = data.results;
    return listOfProducts;
  } catch (e) {
    throw new Error('Termo de busca não informado');
  }
};
// fetchProductsList('computador');
