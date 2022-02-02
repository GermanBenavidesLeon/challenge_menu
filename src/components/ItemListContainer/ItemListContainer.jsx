import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ItemList from '../ItemLIst/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../Service/getFirestore'
import './ItemListContainer.css'


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams()
  
  useEffect(() => {
    const db = getFirestore()
    const dbFire = id ?  db.collection('Productos').where('categoria', '==', id) : db.collection('Productos')
          dbFire.get()
        .then(data => setProducts( data.docs.map(pro => ( { id: pro.id, ...pro.data()}))))
        .finally(() => setLoading(false))
  },[id]) 
  
  return (
    <div className='listConta'>
        <h1 className='AppH1'>Nuestro Menu</h1>
        { loading ? <div className='spinner'>
                        <h4 className='AppH1'>Cargando ....</h4>
                        <Spinner animation="border" size="sm" />
                        <Spinner animation="border" size="sm" />
                     </div> : <ItemList products={products}/>}
    </div>
  )
}

export default ItemListContainer
