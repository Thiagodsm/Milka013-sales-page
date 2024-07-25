// src/components/ProductList.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
        <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src="https://picsum.photos/200" alt="Produto" /> {/* Placeholder image */}
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>ID do Usuário: {product.userId}</Card.Text>
            <Card.Text>Concluído: {product.completed ? 'Sim' : 'Não'}</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
