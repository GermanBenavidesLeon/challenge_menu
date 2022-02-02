import React, { memo } from 'react';
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = memo(
    ({products}) => {
    
        return (
            <div className='itemList'>
                {products.map( prod => <Item key={prod.id} prod={prod}/> ) }
            </div>
        )
    }
)

export default ItemList
