import React, { useState } from 'react';
import ItemCount from '../ItemCount';

export default function ItemListContainer({greeting}) {
    const [elementosCarrito, setElementosCarrito] = useState(0);

    return (
        <>
            <p>{greeting} Elementos enviados al carrito: {elementosCarrito}</p>
            <ItemCount stock={5} inicial={0} onAdd={setElementosCarrito}/>
        </>
    )
};
