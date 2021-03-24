import React from 'react';
import Item from '../Item';
import styles from "./ItemList.module.css";

//Desarrolla la vista utilizando un array de items y un map

const ItemList = ({items=[]}) => {
    
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 text-center'>
            {items.map(item => 
                <div className= {`${styles.itemsCard} card col p-2`} key= {item.id}>
                    <Item item={item}/>
                </div>)
            }
        </div>
    )

}
 
export default ItemList;