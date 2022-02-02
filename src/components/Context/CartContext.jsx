import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}


const CartContextProvider = ( {children} ) => {
    const [cartList, setCarList] = useState ([])

    const agregarItem =( item ) => {
        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const cantVieja = cartList[index].cantidad
                cartList.splice(index, 1)
                setCarList([...cartList, { ...item, cantidad: item.cantidad + cantVieja}])
        } else {
                setCarList([...cartList, item ])
        }
    }

    const totalPrice =() => {
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price), 0)
    }

    const deleteItem = (id) => {
        setCarList(cartList.filter(item => item.id !== id))
    }

    const cantidadItem = () => {
        return cartList.reduce((acum, item)=> acum = acum + item.cantidad , 0)
    }

    const borrarCart=()=> {
        setCarList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarItem,
            deleteItem,
            borrarCart,
            cantidadItem,
            totalPrice
        }}>
           {children} 
        </CartContext.Provider>
    )
}

export default CartContextProvider

