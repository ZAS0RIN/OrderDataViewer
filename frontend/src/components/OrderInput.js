import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const OrderInput = ({ onFetchOrder }) => {
  const [orderId, setOrderId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderId.length !== 0){
        onFetchOrder(orderId);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formOrderId">
              <Form.Label column sm="2" className={'nowrap'}>
                № заказа:
              </Form.Label>

              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Введите ID заказа"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />
              </Col>

            </Form.Group>
            <Row className={'requestButtonContainer'}>
              <Button type="submit" fluid>
                Запрос данных о заказе
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderInput;
