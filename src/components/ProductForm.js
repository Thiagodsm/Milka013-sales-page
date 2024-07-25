// src/components/ProductForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ProductForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('https://sua-api.com/products', data);
      reset();
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="name">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" {...register('name')} required />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Descrição</Form.Label>
        <Form.Control type="text" {...register('description')} required />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Preço</Form.Label>
        <Form.Control type="number" step="0.01" {...register('price')} required />
      </Form.Group>
      <Form.Group controlId="stock">
        <Form.Label>Quantidade em Estoque</Form.Label>
        <Form.Control type="number" {...register('stock')} required />
      </Form.Group>
      <Form.Group controlId="image">
        <Form.Label>URL da Imagem</Form.Label>
        <Form.Control type="text" {...register('image')} required />
      </Form.Group>
      <Button variant="primary" type="submit">Cadastrar Produto</Button>
    </Form>
  );
};

export default ProductForm;
