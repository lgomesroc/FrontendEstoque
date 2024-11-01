// frontend/src/components/ProductList.tsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const response = await api.get('/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.description} - ${product.price} - {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
