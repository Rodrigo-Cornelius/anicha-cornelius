import React from 'react';


export default function ItemDetail({item={}}) {
    return (
        <div className = 'card'>
            <div className ='pt-2 mx-2'>
                <img className={` img-fluid`} src={item.pictureURL} />
            </div>
            <div className= "card-body">
                <h5 className='card-title '>{item.tittle}</h5>
                <p className = 'card-text'>{item.description}</p>
                <p className= "card-text fst-italic">{item.price}</p>
            </div>
        </div>
    )

};
