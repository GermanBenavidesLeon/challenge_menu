import React, { memo } from 'react';
import Item from '../Item/Item';

const ItemList = memo(
    ({products}) => {
    
        return (
            <>
                {products.map( prod => <Item key={prod.id} prod={prod}/> ) }
            </>
        )
    }
)

export default ItemList
