import React, {useState, useContext, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import styles from './CartWidget.module.css';
import { CartContext } from "../../context/CartContext";


export default function CartWidget() {
    const {cart, quantityTotal} = useContext(CartContext);
    const [unidadesCart, setUnidadesCart] = useState(
        quantityTotal()
    );
    
    

    useEffect(() => {
        setUnidadesCart(quantityTotal())
    }, [cart, quantityTotal]);

    // useEffect(() => {
    //     let total = 0
    //     cart.forEach(e => {
    //         total=total + e.quantity;
    //     });
    //     setUnidadesCart(total)
    // }, [cart]);
    

    return (
        <i className= {`fs-4 ${styles.carrito} position-relative`} >
            <FontAwesomeIcon className={`${styles.test}`} icon={faShoppingCart}/>
            <span className={` position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark ${styles.carritoCount}`}>
                {unidadesCart}
                {console.log('algo')}
            </span>
        </i>
    )
};
