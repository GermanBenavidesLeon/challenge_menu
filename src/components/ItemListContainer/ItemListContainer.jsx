import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Productos from '../Array/Prodcutos'
import './ItemListContainer.css'
import ItemList from '../ItemLIst/ItemList';


const getFetch = new Promise ((respuesta, rechazado) => {
  const condition = true
    if (condition) {
        setTimeout(()=>{
            respuesta (Productos)
        },3000)
    } else {
      setTimeout(() => {
        rechazado('404 not found')
      }, 3000)
    }
  })

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loanding, setLoanding] = useState(true);
  
  useEffect(() => {
      getFetch
      .then(respuesta => {
      setProducts(respuesta)
      })
      .catch(err => console.log(err))
      .finally(()=> setLoanding(false))
  },[]);
  
  return (
    <div>
        { loanding ? <div className='spinner'>
                        <h4>Cargando ....</h4>
                        <Spinner animation="border" size="sm" />
                        <Spinner animation="border" size="sm" />
                        <Spinner animation="border" />
                     </div> : <ItemList products={products}/>}
    </div>
  )
}

export default ItemListContainer
