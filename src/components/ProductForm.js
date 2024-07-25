// src/components/ProductForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const ProductForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Adicione um novo produto</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white shadow-md rounded-lg p-4">
        <div>
          <label className="block text-gray-700">Título</label>
          <input
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            {...register('title', { required: true })}
          />
        </div>
        <div>
          <label className="block text-gray-700">Descrição</label>
          <textarea
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            {...register('description', { required: true })}
          />
        </div>
        <div>
          <label className="block text-gray-700">Preço</label>
          <input
            type="number"
            step="0.01"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            {...register('price', { required: true })}
          />
        </div>
        <div>
          <label className="block text-gray-700">Quantidade em estoque</label>
          <input
            type="number"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            {...register('stock', { required: true })}
          />
        </div>
        <div>
          <label className="block text-gray-700">Completo</label>
          <input
            type="checkbox"
            className="mt-1"
            {...register('completed')}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Adicionar produto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
