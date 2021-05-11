import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import LoadingIcon from '../LoadingIcon';

import { getFirestore } from "../../firebase";


export default function ItemListContainer() {
    
    const [itemsArray, setItemsArray] = useState([]);
    const [Loading, setLoading] = useState(true);
    
    const categoryID = useParams().categoryId

    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = db.collection('items')
        
        const itemProm = () => {            
            if(categoryID === undefined || categoryID === "/") {
                return itemsCollection.get()
            }
            return itemsCollection.where('categoryID', '==', categoryID).get()
        }

        itemProm().then(
            (snaptshot) => {
                if (snaptshot.size > 0) {
                    setLoading(false)
                    setItemsArray(snaptshot.docs.map(doc=>{
                        return {id:doc.id, ...doc.data()}
                        })
                    )
                }
            }
        )
            
    },[categoryID, setLoading]);
    
    
    
    return(
        <>
            {Loading?
            <div className="mt-5">
                <LoadingIcon/>
            </div>
            :
            <div>
                <ItemList items={itemsArray} />
                
            </div>}
        </>
    )
};
