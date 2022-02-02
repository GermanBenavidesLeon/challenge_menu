import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import { MdDelete, MdShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../Modal/Modal'
import './Cart.css'
import 'animate.css';



const Cart = () => {
    const [modalShow, setModalShow] = useState(false);
    
    const {cartList, borrarCart, deleteItem, cantidadItem, totalPrice} = useCartContext()

    return (
        <div className='classCart'>
            { cartList.length === 0 ?
            <div>
                <div className='Cart'>
                    <h3 className='animate__animated animate__zoomIn animate__delay-1s'>No hay pedidos!</h3>
                </div>
                <div class='boton1'>
                <Link to='/menu' className='Link'>
                    <Button variant="secondary" className='button1' startIcon={<MdShoppingBag  />}><h6 className='cartboton1'>Realiza tu pedido</h6></Button>
                </Link>
                </div>
            </div>
            :
            <>
            <h2 className='cartPedido'> Tu carrito de compras </h2>
            <div> 
                <table className="table table-bordered border-secondary container" >
                    <thead className='table border-secondary table' style={{ color:'#fff176' }}>
                        <tr>
                            <th scope="col">Plato</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className='border-secondary'>   
                        {cartList.map(items =>  <tr style={{ color:'#fff176' }}>
                                                    <td>{ items.name }</td>
                                                    <td>{ items.cantidad }</td>
                                                    <td>$ { items.price }</td>
                                                    <th>
                                                        <MdDelete onClick={() => deleteItem(items.id)} />
                                                    </th>
                                                </tr>     
                                            )}    
                    </tbody>
                    <tbody className='border-secondary'>
                        <tr style={{ color:'#fff176' }}>
                            <th></th>
                            <th>
                                <p>Cantidad Total = {cantidadItem()}</p>
                            </th>
                            <th>
                                <p>Precio Total = {totalPrice()}</p>
                            </th> 
                            <th></th> 
                        </tr>
                    </tbody>
                </table>            
            </div>
            <div className='botonesCart'>
                <Link to='/catalogo' className=''>
                  <Button variant="outline-dark" className='botones' style={{ color:'#fff176' }}>Agrega otro Pedido</Button>
                </Link>
                <Button variant="outline-dark" className='botones' style={{ color:'#fff176' }} onClick={borrarCart} startIcon={<MdDelete  />}>Borrar Pedido</Button>
                <Button variant="outline-dark" className='botones' style={{ color:'#fff176' }} onClick={()=> setModalShow(true)}>Generar Orden</Button>
                <MyVerticallyCenteredModal show={modalShow} onHide={()=> setModalShow(false)} />
            </div>
            </>
        }
    </div>
    )
}

export default Cart
