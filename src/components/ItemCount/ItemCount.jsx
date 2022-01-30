import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

import withReactContent from 'sweetalert2-react-content';
import './ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(1)

  const sumaItem = () => {
    count < stock ? setCount(count + 1) : Swal.fire(   
      'Ooppss!',
      'Limite maximo de pedido!',
      'warning'
    )
  }

  const restaItem = () => {
    count > initial ? setCount(count - 1) : Swal.fire(      
      'Por favor!',
      'Debes agregar al menos un producto!',
      'error'
    )
  }

  const Agregar = () => {
    
    const MySwal = withReactContent(Swal)   
        MySwal.fire({
            didOpen: () => {
        MySwal.clickConfirm()
    }
        }).then(() => {
            return MySwal.fire(<h5>agregaste {count} productos al carrito</h5>)
        })    
}

   
  return (
    <div className='count'>
      
        <>
          <Button variant="outline-success" className='botones' onClick={sumaItem}>+</Button>
          <label className='botones'>{count}</label>
          <Button variant="outline-danger" className='botones' onClick={restaItem}>-</Button>
          <Button variant="outline-dark" className='botones' onClick={Agregar}>Agregar a tu compra</Button>
        </>

    </div>
  );
}

export default ItemCount;
