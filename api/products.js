import axios from 'axios';

const API_URL = 'https://delivery-app-ylxl.onrender.com';

// Получить список всех товаров
export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

// Создать новый товар
export const createProduct = async (product) => {
  const response = await axios.post(`${API_URL}/products`, product);
  return response.data;
};

// Получить информацию о конкретном товаре по его идентификатору
export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

// Обновить информацию о товаре по его идентификатору
export const updateProduct = async (id, product) => {
  const response = await axios.put(`${API_URL}/products/${id}`, product);
  return response.data;
};

// Удалить товар по его идентификатору
export const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/products/${id}`);
};