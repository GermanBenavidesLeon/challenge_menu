import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom'
import './ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(1)
  const [cambioButton, setCambioButton] = useState(true)

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
    onAdd(count)
    setCount(1)
    setCambioButton(false)
    
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
      {cambioButton ?
          <>
            <Button variant="outline-success" className='botones' onClick={sumaItem}>+</Button>
            <label className='botones'>{count}</label>
            <Button variant="outline-danger" className='botones' onClick={restaItem}>-</Button>
            <Button variant="outline-dark" className='botones' onClick={Agregar}>Agregar a tu compra</Button>
          </>
          :
          <div>
                  <Link to='/menu' className='Link'>
                      <Button variant='outline-dark' className='botones' style={{ color:'#fff176' }}>Seguir comprando</Button>
                  </Link>
                  <Link to='/Cart' className='Link'>
                      <Button variant='outline-dark' className='botones' style={{ color:'#fff176' }}>Ir a Comprar</Button>
                  </Link>
          </div>
      }
    </div>
  );
}

export default ItemCount;
