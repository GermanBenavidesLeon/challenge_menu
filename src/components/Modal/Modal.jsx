import { useState } from 'react'
import { Modal, Alert } from 'react-bootstrap' 
import 'bootstrap'
import { useCartContext } from '../Context/CartContext'
import firebase from "firebase"
import 'firebase/firestore'
import { getFirestore } from '../../Service/getFirestore'
import './Modal.css'
import { Link } from 'react-router-dom'

const MyVerticallyCenteredModal = (props) => {
    const [ name, setName] = useState('')
    const [ phone, setPhone] = useState('')
    const [ email, setEmail] = useState('')
    const [ emailOk, setEmailOk] = useState('')
    const [ idOrder, setIdOrder] = useState()

    const {cartList, borrarCart, totalPrice} = useCartContext()

    const orderGerenate = (e) =>{
        e.preventDefault()
        const comprador = {name, phone, email, emailOk}
        const db = getFirestore()
        const ordersCollection = db.collection('orders')

        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.buyer = {comprador}
        order.total = totalPrice()
        order.items = cartList.map((items) => {
            const id = items.id
            const name = items.name
            const price = items.price * items.cantidad
            return {id, name, price}          
        })

        ordersCollection.add(order)
          .then((IdDocument) => { setIdOrder(IdDocument.id)
       })  
  }
  
    return (
      <Modal
        {...props} size="lg" aria-labelledby="contained-modal-title-vcenter"centered className='modal'
      >
        <Modal.Header className='modalH' closeButton> 
          <Modal.Title id="contained-modal-title-vcenter">Ingresar Datos</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bodyModal'>
          <form className="row g-4 needs-validation" onSubmit={orderGerenate}>
                <div className="col-md-6">
                  <label className="form-label">Nombre y Apellido</label>
                  <input type="text" 
                         name='name'
                         className={
                           name.length <= 3 ?  'form-control is-invalid' : 'form-control is-valid'
                         }
                         value={name} 
                         onChange={(e) => setName(e.target.value)} required/>
                  <div className="valid-feedback">
                    Ok!
                  </div>
                  <div className="invalid-feedback">
                    Por favor ingresar nombre y apellido!
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Telefono</label>
                  <input type="text"
                         name='phone'  
                         className={
                          phone.length === 10 ?  'form-control is-valid' : 'form-control is-invalid'
                        }
                         value={phone} 
                         onChange={(e) => setPhone(e.target.value)} required/>
                  <div className="valid-feedback">
                    Ok!
                  </div>
                  <div className="invalid-feedback">
                    ingresar numero sin espacios, solo el nuemro ej: 1100000000
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label" >Email</label>
                  <input type="email"  
                         name='email'
                         className="form-control" 
                         value={email} 
                         onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Confirme email</label>
                  <input type="email"
                         name='emailOk'
                         className={  
                          emailOk === email ? 'form-control is-valid' : 'form-control is-invalid' 
                         }
                         value={emailOk} 
                         onChange={(e) => setEmailOk(e.target.value)}
                         required/>
                  <div className="valid-feedback">
                    Email valido!
                  </div>
                  <div className="invalid-feedback">
                    El email ingresado no es correcto!
                  </div>
                </div>
                <div className="col-12">
                  <div className="invalid-feedback">
                    Por favor debe ingresar todos los datos!
                  </div>
                  <div className=''>
                    <button className='btn btn-dark botones'>Finalizar compra</button>
                    <Link to='/menu'>
                       <button onClick={borrarCart} className='btn btn-dark botones' type='submit'>Volver a la tienda</button>
                    </Link>
                  </div>
                </div>
          </form>
        </Modal.Body>
        <Alert variant="success">
          <Alert.Heading>Compra exitosa!</Alert.Heading>
            <h6>
              {idOrder ? ` Su orden se genero con el codigo: ${idOrder}` : null}
            </h6>
        </Alert>
      </Modal>
    );
}
  export default MyVerticallyCenteredModal;

  