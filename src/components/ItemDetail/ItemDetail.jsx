import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap'; 

const ItemDetail = (prod) => {
  return (
    <div>
        <Card style={{ width: '18rem' }} key={prod.id}>
            <Card.Img variant="top" src={prod.imagen} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{prod.categoria}</Card.Subtitle>
                            <Card.Text>
                                {prod.detalle}
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{prod.price}</ListGroup.Item>
                            </ListGroup>
                        <ItemCount initial={1} stock={5} />
                    <Button variant="secondary">Comprar</Button>
                </Card.Body>
        </Card>

    </div>
  ) 
    
}

export default ItemDetail
