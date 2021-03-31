import React from 'react';
import styles from './Item.module.css';


//Desarrolla la vista de un item donde item es de tipo
//{id, tittle, price, pictureURL}

const Item = ({item}) => {
    return ( 
        <>
            <div className ={`${styles.imgBox} `}>
                <img className={`${styles.images} mh-100 mw-100 `} src={item.pictureURL} alt={`imagen de ${item.tittle}`}/>
            </div>
            <div className= "card-body">
                <h5 className={`card-title `} >{item.tittle}</h5>
                <p className= "card-text">${item.price}</p>
            </div>
        </>
     );
}
 
export default Item;