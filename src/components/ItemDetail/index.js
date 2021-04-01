import React, {useState} from 'react';
import styles from './ItemDetail.module.css';
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom';

export default function ItemDetail({item={}}) {
    const [elementosCarrito, setElementosCarrito] = useState(0);

    return (
        <div className={`container pb-3`}> 
            <div className='row my-3 p-2 border border-2 rounded-2 bg-white shadow-sm'>
                <div className= {`col-12 col-lg-8 ${styles.imgBox}`}>
                    <img className= {`${styles.images} py-1 rounded-1`} src={item.pictureURL} alt={item.tittle}/>
                </div>
                <div className={`col border-start ${styles.descriptionBox}`}>
                    <h2>{item.tittle}</h2>
                    <p>{item.description}</p> 
                    <p className='text-end fs-5'>$ {item.price}</p>
                    <p>Elementos enviados al carrito: {elementosCarrito}</p>
                    {
                        elementosCarrito === 0 ?
                            <ItemCount stock={5} inicial={0} onAdd={setElementosCarrito}/>
                        :
                        <Link to='/cart' className={`d-flex align-items-center justify-content-center mt-4 ${styles.btn_link}`}>
                            <button type="button" className={`btn btn-primary ${styles.btn_link_terminarCompra}`}>
                                Terminar mi compra
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )

};
