import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Importa o objeto api

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts(); // Usa a função getProducts
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold my-4">Lista de produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://picsum.photos/200" alt={product.title} />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-700"><strong>Completo:</strong> {product.completed ? 'Sim' : 'Não'}</p>
              <div className="text-gray-600 text-sm mt-2">ID: {product.id}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
