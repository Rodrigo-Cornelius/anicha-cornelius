import React, {useState, useContext, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import styles from './CartWidget.module.css';
import { CartContext } from "../../context/CartContext";


export default function CartWidget() {
    const {cart} = useContext(CartContext);
    const [unidadesCart, setUnidadesCart] = useState(0);
    
    

    useEffect(() => {
        cart.forEach(e => {
            setUnidadesCart(unidadesCart+e.quantity)
        });
        
    }, [cart, unidadesCart]);
    

    return (
        <i className= {`fs-4 ${styles.carrito} position-relative`} >
            <FontAwesomeIcon className={`${styles.test}`} icon={faShoppingCart}/>
            <span className={` position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark ${styles.carritoCount}`}>
                {unidadesCart}
            </span>
        </i>
    )
};
