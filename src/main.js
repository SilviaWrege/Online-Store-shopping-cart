import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';

const result = await fetchProductsList('computador');
console.log(result);
document.querySelector('.cep-button').addEventListener('click', searchCep);
