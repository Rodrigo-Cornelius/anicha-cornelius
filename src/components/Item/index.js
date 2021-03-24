import React from 'react';


//Desarrolla la vista de un item donde item es de tipo
//{id, tittle, price, pictureURL}

const Item = ({item}) => {
    return ( 
        <>
            <div className ='pt-2 mx-2'>
                <img className={` img-fluid`} src={item.pictureURL} alt={`imagen de ${item.tittle}`}/>
            </div>
            <div className= "card-body">
                <h5 className='card-title '>{item.tittle}</h5>
                <p className= "card-text">${item.price}</p>
            </div>
        </>
     );
}
 
export default Item;