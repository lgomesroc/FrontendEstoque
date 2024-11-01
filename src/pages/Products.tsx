// src/components/Products.tsx
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import api from '../services/api';

interface Product {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  valor: number;
  quantidade: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    nome: '',
    descricao: '',
    imagem: '',
    valor: 0,
    quantidade: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/products', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({
        nome: '',
        descricao: '',
        imagem: '',
        valor: 0,
        quantidade: 0,
      });
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  return (
    <div>
      <h1>Produtos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={newProduct.nome}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={newProduct.descricao}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="imagem"
          placeholder="Imagem (URL ou base64)"
          value={newProduct.imagem}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={newProduct.valor}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="quantidade"
          placeholder="Quantidade"
          value={newProduct.quantidade}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Adicionar Produto</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.nome}</h2>
            <p>{product.descricao}</p>
            <p>Valor: {product.valor}</p>
            <p>Quantidade: {product.quantidade}</p>
            <img src={product.imagem} alt={product.nome} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
