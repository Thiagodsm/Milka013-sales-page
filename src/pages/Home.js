// src/pages/Home.js
import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ products }) => {
  return (
    <div className="container">
      <h1>Milka Chocolate Sales</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
