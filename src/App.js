import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import api from './services/api';

const App = () => {
  const handleAddProduct = async (data) => {
    try {
      await api.addProduct(data);
      alert('Producto adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Falha ao adicionar produto');
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/adicionar-produto" element={<ProductForm onSubmit={handleAddProduct} />} />
      </Routes>
    </Router>
  );
};

export default App;
