import React, {useState} from 'react';
import styles from './ItemDetail.module.css';
import ItemCount from '../ItemCount';

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
                    <ItemCount stock={5} inicial={0} onAdd={setElementosCarrito}/>

                </div>
            </div>
        </div>
    )

};
