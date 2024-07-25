// src/components/ProductForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api';

const ProductForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.createProduct(data); // Supondo que você tenha um método createProduct na sua API
      reset();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Adicionar produto</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Título</label>
          <input
            {...register('title', { required: true })}
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Descricao</label>
          <input
            {...register('description', { required: true })}
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Preço</label>
          <input
            {...register('price', { required: true })}
            type="number"
            step="0.01"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Quantidade em estoque</label>
          <input
            {...register('stock', { required: true })}
            type="number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">URL (link) da imagem</label>
          <input
            {...register('image', { required: true })}
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Adicionar produto
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
