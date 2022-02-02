import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'


const Item = ({prod}) => {
  return (
    <div className='item'>
            <Card style={{ width: '14rem', background: '#424242'}} key={prod.id}>
                <Card.Img variant="top" src={prod.imagen} className='imagen' />
                    <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                            <Card.Text>
                                {prod.categoria}
                            </Card.Text>
                        <Link to={`/detalle/${prod.id}`}>
                          <Button variant="outline-dark" style={{ color: '#ffff8d'}}>Detalle del plato</Button>
                        </Link>
                    </Card.Body>
            </Card>
    </div>
  )
}

export default Item;
