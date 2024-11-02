import React, { useState } from 'react';
import { Product } from '../services/api';

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !description || price <= 0 || quantity < 0) {
      setError('Todos os campos são obrigatórios e os valores devem ser válidos.');
      return;
    }
    const newProduct = { name, description, price, quantity };
    onAddProduct(newProduct);
    setName('');
    setDescription('');
    setPrice(0);
    setQuantity(0);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Produto</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Nome do Produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição do Produto"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        required
      />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProductForm;
