import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import styles from './CartWidget.module.css';

export default function CartWidget() {

    return (
        <i className= {`fs-4 ${styles.carrito}`} >
            <FontAwesomeIcon className={styles.test} icon={faShoppingCart}/>
        </i>
    )
};

// faShoppingCart
//{styles.carrito}