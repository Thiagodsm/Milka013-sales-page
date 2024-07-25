// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import api from './services/api';

const App = () => {
  const handleAddProduct = async (data) => {
    try {
      await api.addProduct(data);
      alert('Produto adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Falhar ao adicionar produto');
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/adicionar-produto" element={<ProductForm onSubmit={handleAddProduct} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
