// frontend/src/App.tsx
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div>
        <h1>Stock Management System</h1>
        <Login />
        <Register />
        <ProductForm />
        <ProductList />
      </div>
    </AuthProvider>
  );
};

export default App;
