import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

export default function ItemListContainer({greeting}) {
    const [elementosCarrito, setElementosCarrito] = useState(0);
    const [itemsArray, setItemsArray] = useState([]);

    useEffect(() => {
        const itemsProm = new Promise ((resolve) =>{
            setTimeout(() => {
                resolve(
                    [
                        {
                            id: 1,
                            tittle : 'Maceta 18x20',
                            price: 390,
                            pictureURL : "/img/macetaMadera18x20.webp"
                        },
                        {
                            id: 2,
                            tittle : 'Huerta Vertical De Pared',
                            price: 1700,
                            pictureURL : '/img/huertaVertical.webp'
                        },
                        {
                            id: 3,
                            tittle : 'Tabla De Picar Con Diseño',
                            price: 450,
                            pictureURL : '/img/tablaPicarConDiseño.webp'
                        },
                        {
                            id: 4,
                            tittle : 'Percheros Con Diseños',
                            price: 470,
                            pictureURL : '/img/percherosDiseñosVarios.webp'
                        },
                        {
                            id: 5,
                            tittle : 'Percheros Personalizados',
                            price: 890,
                            pictureURL : '/img/percherosPersonalizados.webp'
                        },
                        {
                            id: 6,
                            tittle : 'Repisa/Organizador Para Libros',
                            price: 1850,
                            pictureURL : '/img/repisaOrganizador.webp'
                        },
                    ]
                )
            }, 2000);
        });
    
        itemsProm.then(
            (res) => {
                setItemsArray(res);
            }   
        )
    });
    
    
    return(
        <div>
            <p>{greeting} Elementos enviados al carrito: {elementosCarrito}</p>
            <ItemList items={itemsArray} />
            <ItemCount stock={5} inicial={0} onAdd={setElementosCarrito}/>
        </div>
    )
};
