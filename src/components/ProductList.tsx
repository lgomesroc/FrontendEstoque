import React from 'react';
import { Product } from '../services/api';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.description} - R${product.price} - Estoque: {product.quantity}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
