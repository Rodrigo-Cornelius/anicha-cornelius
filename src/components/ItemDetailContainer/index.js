import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';







const ItemDetailContainer = () => {
    const [item, setItem] = useState();


    useEffect(() => {

        const getItem = new Promise ((resolve) =>{
            setTimeout(() => {
                resolve(
                        {
                            id: 1,
                            tittle : 'Maceta 18x20',
                            description: 'Macetas en madera maciza + tierra con abono orgánico (compost) de regalo. Le aplicamos dos manos de protector para madera (color: Roble).',
                            price: 390,
                            pictureURL : "/img/macetaMadera18x20.webp"
                        }
                )
            }, 2000);
        });
    
        getItem.then(
            (res) => {
                setItem(res);
            }   
        )
    },[]);
    
        console.log(item);
    return (
        <>
            <h3>dasdasdasda</h3>
            
            <ItemDetail item={item} />
        </>
    )

}

export default ItemDetailContainer;

