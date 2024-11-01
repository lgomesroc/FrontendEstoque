// frontend/src/components/ProductForm.tsx
import React, { useState } from 'react';
import api from '../services/api';

const ProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post('/products', { name, description, price, quantity });
    // Limpar os campos após a adição do produto
    setName('');
    setDescription('');
    setPrice(0);
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" required />
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
