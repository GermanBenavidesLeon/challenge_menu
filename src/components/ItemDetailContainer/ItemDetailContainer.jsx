import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../Service/getFirestore';
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [items, setItems] = useState({});
    const [loanding, setLoading] = useState(true);

    const {id} = useParams()

    useEffect(() => {
      const itemsFirestore = getFirestore()
      itemsFirestore.collection('Productos').doc(id).get()
      .then(res => setItems({id: res.id, ...res.data()}))
      .finally(()=> setLoading(false))    
      
  },[id])
  
    return (
        <div className='detailContainer'>
            { loanding ? <div className='spinner'>
                            <h4>Cargando ....</h4>
                            <Spinner animation="border" size="sm" />
                            <Spinner animation="border" size="sm" />
                        </div> : <ItemDetail items={items} />}
        </div>
  ) 
}
export default ItemDetailContainer;