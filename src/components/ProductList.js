// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de produtos</h1>
      {Array.isArray(products) && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://picsum.photos/200" alt={product.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p>{product.completed ? "Completo" : "Não completo"}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Nenhum produto disponível</p>
      )}
    </div>
  );
};

export default ProductList;
