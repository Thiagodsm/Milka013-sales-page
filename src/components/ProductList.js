// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Importa o objeto api
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap'; // Importa componentes do React Bootstrap

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
      <Container className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="my-4">Product List</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} key={product.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/200" alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <strong>Completed:</strong> {product.completed ? 'Yes' : 'No'}
                </Card.Text>
                <Card.Footer className="text-muted">ID: {product.id}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
