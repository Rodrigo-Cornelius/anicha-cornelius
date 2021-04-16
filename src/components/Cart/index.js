import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from "../../context/CartContext";
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';


const Cart = () => {
    const {cart, removeItem} = useContext(CartContext);
    const [precioFinal, setPrecioFinal] = useState(0);

    useEffect(() => {
        let total = 0;
        cart.forEach(e => {
            total+= e.item.price * e.quantity
            
        });

        setPrecioFinal(total);
    }, [cart]);
    
    // tittle price description pictureURL categoryID
    

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
                                        <button onClick={()=>removeItem(e.item.id)}>Eliminar Item</button>
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
                </div>
            }
        </>
     );
}
 
export default Cart;