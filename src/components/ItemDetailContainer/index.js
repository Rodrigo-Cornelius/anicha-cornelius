import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import {getFirestore} from '../../firebase'


const getItem = (itemID) => {  
    
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    const dbItem = itemsCollection.doc(itemID);

    return dbItem.get();
    
}

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {itemId} = useParams();

    useEffect(() => {
        
        getItem(itemId)
        .then((doc) => {
            if (doc.exists) {
                setItem({id:doc.id, ...doc.data()})
            } 
           
        })


    },[itemId]);
    return (
        <>  {item!==null ?
            <ItemDetail item={item} />
            :
            <h2 className='text-center'>Item No encontrado</h2>
            }
        </>
    )

}

export default ItemDetailContainer;

