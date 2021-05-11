import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item';
import styles from "./ItemList.module.css";


const ItemList = ({items=[]}) => {
    
    return (
        <div className='container mt-2 mb-3 mx-auto row row-cols-3 justify-content-around gy-3'>
            {items.map(item => 
                <Link to={`/item/${item.id}`} className= {`${styles.itemBox} card col p-2`} key= {item.id}>
                    <Item item={item}/>
                </Link>
                )
            }
        </div>
    )

}
 
export default ItemList;