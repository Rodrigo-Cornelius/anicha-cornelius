import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from "../../context/CartContext";
import firebase from 'firebase/app';
import 'firebase/firestore'
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import { getFirestore } from "../../firebase";
import LoadingIcon from "../LoadingIcon";




const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext);
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
        return
    }, [cart, idItem, removeItem]);

    const generarOrden = (e) => {
        e.preventDefault();
        
        const db = getFirestore();
        const orderCollection = db.collection("orders");
        

        let orden = {};

        let itemsOrden = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.tittle;
            const price = cartItem.item.price * cartItem.quantity;
            return {id, title, price}
        })
        orden.buyer = { name: document.querySelector('#formName').value, phone: document.querySelector('#formPhone').value, email: document.querySelector('#formEmail').value};
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
                            <div key={e.item.tittle}  className={`container my-3 p-2 border border-2 rounded-2 bg-white shadow-sm`}>
                                
                                <div className='row '>
                                    <div className= {`col-12 col-lg-2 ${styles.imgBox}`}>
                                        <img className= {`${styles.images} py-1 rounded-1`} src={e.item.pictureURL} alt={e.item.tittle}/>
                                    </div>
                                    <div className={`col  ${styles.descriptionBox}`}>
                                        <h2 className='fs-4'>{e.item.tittle}</h2>
                                        <p className='fw-light'>{e.item.description}</p>
                                    </div>
                                        <button onClick={()=>setIdItem(e.item.id)} type='button'>Eliminar Item</button>
                                </div>
                                <div className='row '>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='fs-5 fw-light'>Cantidad: {e.quantity}</p>
                                            <p className='fs-5 text-end fw-bold'>$ {e.item.price * e.quantity}</p>
                                        </div>
                                </div>
                        
                            </div>
                        )}
                    </div>
                    <div className='container text-center shadow-sm'>
                        <h3 className={`py-3 rounded-bottom border border-2 ${styles.precioFinalH3}`}>Precio Final</h3>
                        <p className={`fs-4 `}>{precioFinal}</p>
                    </div>

                    <div id="app" className="container">
                        <form className="row g-3 ">
                            <div className="col-md-6">
                                <label htmlFor="formName" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="formName" placeholder="Nombre Completo" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="formPhone" className="form-label">Telefono</label>
                                <input type="text" className="form-control" id="formPhone" placeholder={123456789} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="formEmail" className="form-label">Email</label>
                                <input type="text" className="form-control" id="formEmail" placeholder="ejemplo@dominio.com" />
                            </div>
                            <div className="col-12">
                                <button onClick={(e)=>generarOrden(e)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit">Comprar</button>
                            </div>
                        </form>
                    </div>
                    
                    

                    {/* Pop-up */}

                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="popUpCompra" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    {idCompra===""?
                                        <h5 className="modal-title" id="popUpCompra">Comprando...</h5>
                                        :
                                        <h5 className="modal-title" id="popUpCompra">Compra Realizada</h5>
                                    }
                                </div>
                                <div className="modal-body">
                                    {idCompra===""?
                                    <LoadingIcon bigIcon={false} />
                                    :
                                    <>
                                         ID de la orden: <span className={`fw-bold ${styles.idNuevaCompra}`}>{idCompra}</span>
                                    </>
                                    }
                                </div>
                                <div className="modal-footer">
                                    {idCompra!==""&&<button onClick={()=>clear()} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>}
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
                
                


            }
        </>
     );
}
 
export default Cart ;