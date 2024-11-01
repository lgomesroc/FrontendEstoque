// frontend/src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const login = async (email: string, password: string) => {
    const response = await api.post('/users/login', { email, password });
    setUser(response.data);
  };

  const register = async (name: string, email: string, password: string) => {
    await api.post('/users/register', { name, email, password });
    // Aqui você pode fazer um login automático após o registro, se desejar
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
};
