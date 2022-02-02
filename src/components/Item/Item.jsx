import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'


const Item = ({prod}) => {
  return (
    <div className='item'>
            <Card style={{ width: '15rem', background: '#424242'}} key={prod.id}>
                <Card.Img variant="top" src={prod.imagen} className='imagenItem' />
                    <Card.Body>
                        <h4 className='cardBody'>{prod.name}</h4>
                            <Card.Text className='cardBody'>
                                {prod.categoria}
                            </Card.Text>
                        <Link to={`/detalle/${prod.id}`}>
                          <Button variant="outline-dark" style={{ color: '#ffff8d'}}><h4 className='cardBody'>Ver mas ...</h4></Button>
                        </Link>
                    </Card.Body>
            </Card>
    </div>
  )
}

export default Item;
