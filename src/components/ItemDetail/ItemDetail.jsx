import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap'; 
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../Context/CartContext';
import './ItemDetail.css'

const ItemDetail = ({items}) => {
    const [, setCount] = useState(0)
    const {agregarItem} = useCartContext()

    const onAdd = (cant) => {
        setCount(cant)
        agregarItem({...items, cantidad: cant})   
    }

  return (
    <div className='itemDetail'>
        <Card style={{ width: '20rem', background: '#424242' }} key={items.id}>
            <Card.Img variant="top" src={items.imagen} className='imagen' />
                <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{items.categoria}</Card.Subtitle>
                            <Card.Text>
                                {items.detalle}
                            </Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ width: '8rem', background: '#757575', borderRadius: '5px' }}> $ {items.price}</ListGroup.Item>
                            </ListGroup>
                        <ItemCount initial={1} stock={5} onAdd={onAdd} />
                </Card.Body>
        </Card>
    </div>
  ) 
    
}

export default ItemDetail
