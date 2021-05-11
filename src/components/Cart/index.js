import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from "../../context/CartContext";
import firebase from 'firebase/app';
import 'firebase/firestore'
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import { getFirestore } from "../../firebase";
import FormularioCompra from '../FormularioCompra';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'




const Cart = () => {
    const {cart, removeItem} = useContext(CartContext);
    const [precioFinal, setPrecioFinal] = useState(0);
    const [idCompra, setIdCompra] = useState("");

    const [idItem, setIdItem] = useState(null);


    useEffect(() => {
        idItem !== null && removeItem(idItem)


        let total = 0;
        cart.forEach(e => {
            total+= e.item.price * e.quantity
        });
        setPrecioFinal(total);
    }, [cart, idItem, removeItem]);

    const generarOrden = (datos) => {
        
        const db = getFirestore();
        const orderCollection = db.collection("orders");
        

        let orden = {};

        let itemsOrden = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.tittle;
            const price = cartItem.item.price * cartItem.quantity;
            return {id, title, price}
        })
        orden.buyer = datos
        orden.items = { items: itemsOrden, date: firebase.firestore.Timestamp.fromDate(new Date()), total :precioFinal}
        
        orderCollection.add(orden)
        .then(({id}) => {
            setIdCompra(id)
            // clear()
        })
        


    }


    

    return ( 
        
        <>
            {cart.length===0 ? 
            <div>
                <h2 className='text-center fw-light'>El Carro esta vacio</h2>
                <div  className=' text-center'>
                    <Link to='/' >Volver a Comprar</Link>
                </div>
            </div>
            :
                <div className=' pb-3'>
                    <div >
                        {cart.map(e=>
                            <div key={e.item.tittle}  className={`container my-3 p-2 border border-2 rounded-2 bg-white shadow-sm position-relative`}>
                                
                                <div className='row '>
                                    <div className= {`col-12 col-lg-2 ${styles.imgBox}`}>
                                        <img className= {`${styles.images} py-1 rounded-1`} src={e.item.pictureURL} alt={e.item.tittle}/>
                                    </div>
                                    <div className={`col  ${styles.descriptionBox}`}>
                                        <h2 className='fs-4'>{e.item.tittle}</h2>
                                        <p className='fw-light'>{e.item.description}</p>
                                    </div>
                                    {/* <button onClick={()=>setIdItem(e.item.id)} type='button'> Eliminar Item </button> */}
                                </div>
                                <div className='row '>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='fs-5 fw-light'>Cantidad: {e.quantity}</p>
                                            <p className='fs-5 text-end fw-bold'>$ {e.item.price * e.quantity}</p>
                                        </div>
                                </div>
                                    <FontAwesomeIcon onClick={()=>setIdItem(e.item.id)} icon={faTrashAlt} className={`position-absolute top-0 end-0 me-2 mt-2 ${styles.trash} `} size="lg" />
                            </div>
                        )}
                    </div>
                    {/* Precio Final */}
                    <div className='container text-center shadow-sm'>
                        <h3 className={`py-3 rounded-bottom border border-2 ${styles.precioFinalH3}`}>Precio Final</h3>
                        <p className={`fs-4 `}>{precioFinal}</p>
                    </div>


                    {/* Formulario */}

                    <FormularioCompra generarOrden={generarOrden} idCompra={idCompra}/>
                    

                </div>
                
                


            }
        </>
     );
}
 
export default Cart ;