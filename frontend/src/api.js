import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const obtenerRecetas = async () => {
  const response = await axios.get(`${API_URL}/recetas`);
  return response.data;
};
