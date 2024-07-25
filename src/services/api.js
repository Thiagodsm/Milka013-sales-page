// src/services/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com'; // URL da API de teste

const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/todos`);
    console.log('Response data:', response.data); // Log para verificar a resposta
    return response.data; // Retorna a lista de produtos
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};

export default {
  getProducts,
};
