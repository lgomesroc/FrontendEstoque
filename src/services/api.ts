import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002', // Altere conforme sua necessidade
});

// Exemplo de interface para Produto
export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

// Exemplo de interface para Usuário
export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

// Funções para interagir com a API
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products');
  return response.data;
};

export const addProduct = async (product: Product) => {
  await api.post('/products', product);
};

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users');
  return response.data;
};

export const addUser = async (user: User) => {
  await api.post('/users', user);
};

export default api;
