import React, { useState } from 'react';
import styles from './ItemCount.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, inicial, onAdd}) => {

    const [valueInput, setValueInput] = useState(inicial);

    

    const sumarInput = (e) => {
        e.preventDefault();
        setValueInput(valueInput+1)
    }
    const restarInput = (e) => {
        e.preventDefault();
        setValueInput(valueInput-1)

    }
    

    return(
        <form className={`${styles.contenedor} rounded-3  mx-auto shadow-sm `}>
            {/* <div className={`${styles.articulo}`}>
                <h3 className=' text-center pt-1 fs-4 fw-light'>Percheros Personalizados</h3>
            </div> */}
            <div className={`${styles.cantidad}  d-flex mx-auto pb-2`}>
                <div className={`${styles.cantidad__bloque} mx-auto d-block position-relative`}>
                    <input 
                    className={`text-center ${styles.cantidad__input}`} 
                    type="number" 
                    name="cantidad" 
                    id="cantidad"
                    value={valueInput}
                    readOnly
                    />
                    <button 
                    type="button" 
                    className={`${styles.btn__menos} btn border-0 btn-dark btn-sm position-absolute  start-0 `}
                    name='menos'
                    onClick={restarInput}
                    disabled={valueInput<=1}
                    >
                        <i>
                            <FontAwesomeIcon icon={faMinus}/>
                        </i>
                    </button>
                    <button type="button" 
                    className={`${styles.btn__mas} btn border-0 btn-dark btn-sm position-absolute  end-0 `}
                    name="mas"
                    onClick={sumarInput}                   
                    disabled={valueInput>=stock}                    
                    >
                        <i>
                            <FontAwesomeIcon name="mas" icon={faPlus}/>
                        </i>
                    </button>
                </div>
            </div>
            <div className={`${styles.cantidad}  d-flex mx-auto pb-2`}>
                <div className={`${styles.cantidad__bloque} mx-auto d-grid gap-2`}>
                    <button 
                    type="submit" 
                    className={`btn btn-warning ${styles.btn__agregarCarrito}`}
                    disabled={valueInput <=0 || valueInput > stock }
                    onClick={(e)=>{
                        e.preventDefault();
                        valueInput !== 0 && onAdd(valueInput)
                    }}
                    >Agregar a carrito
                    </button>
                </div>
            </div>

        </form>

    )
}



export default ItemCount