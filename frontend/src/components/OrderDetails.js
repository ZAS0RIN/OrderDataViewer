import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const OrderDetails = ({ order }) => {
  if (!order) return null;

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
            {order.product?
              <>
                <Card.Title>Наименование изделия: {order.product.name}</Card.Title>
                <Card.Title>Количество: {order.product.count}</Card.Title>
              </> : <></>
            }
              <Card.Title>Компоненты:</Card.Title>

              <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>№</th>
                      <th>Артикул</th>
                      <th>Наименование</th>
                    </tr>
                    </thead>
                 <tbody>

                    {order.components.map((component, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{component.article}</td>
                          <td>{component.name}</td>
                        </tr>
                    ))}
                  </tbody>
                </Table>

              {order.product && order.product.batch?
                <>
                  <Card.Title>Серийные номера:</Card.Title>

                  <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>№</th>
                      <th>Серийный номер</th>
                    </tr>
                    </thead>
                 <tbody>

                  {order.product.batch.map((serial, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{serial}</td>
                    </tr>
                  ))}

                  </tbody>
                </Table>
                </>: <></>
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetails;
