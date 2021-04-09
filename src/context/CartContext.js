import React, {useState} from 'react';

export const CartContext = React.createContext({})

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        //agregar cierta cantidad de un item al carrito
        // {item:{}, quantity}
        if (isInCart(item.id)) {
            quantity += (cart.find(e=> e.item.id===item.id)).quantity;
            const newCart = cart;
            newCart.splice(
                newCart.findIndex((e)=> e.item.id === item.id),
                1
            )
            newCart.push({item:item, quantity:quantity})
            setCart(newCart)
        }else {
            setCart([...cart, {item:item, quantity:quantity}])

        }
        
    }
    
    const removeItem = (itemId) => {
        //Remover un item del cart usando su id

        const newCart = cart;
        newCart.splice(
            newCart.findIndex((e)=> e.item.id === itemId),
            1
        )
        setCart(newCart)
    }

    const clear = () => {
        // Remover todos los item del cart
        setCart([])
    }

    const isInCart = (id) => {
        //devuelve un boolean si existe algun item en el carro
        return cart.some((e)=>{
            return e.item.id===id
        })
        
    }

    return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>{children}</CartContext.Provider>
}