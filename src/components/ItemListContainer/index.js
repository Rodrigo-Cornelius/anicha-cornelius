import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../ItemList';

import { getFirestore } from "../../firebase";


export default function ItemListContainer() {
    
    const [itemsArray, setItemsArray] = useState([]);
    
    const categoryID = useParams().categoryId

    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = db.collection('items')
        
        const itemProm = () => {
            
            (categoryID === undefined || categoryID === "/")?
            itemsCollection.get()
            :
            itemsCollection.where('categoryID', '==', categoryID)
            
            if(categoryID === undefined || categoryID === "/") {
                return itemsCollection.get()
            }


            return itemsCollection.where('categoryID', '==', categoryID).get()
        
            
            
            // return itemsCollection.get()
        }
        
        
        // const itemsProm = itemsCollection.get()


        itemProm().then(
            (snaptshot) => {
                if (snaptshot.size > 0) {
                    setItemsArray(snaptshot.docs.map(doc=>{
                        return {id:doc.id, ... doc.data()}
                    }
                )
            )

                }
            }
        )
            
    },[categoryID]);
    
    
    
    return(
        <div>
            <ItemList items={itemsArray} />
        </div>
    )
};
