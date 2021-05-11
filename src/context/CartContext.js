import React, {useState} from 'react';

export const CartContext = React.createContext({})

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        //agregar cierta cantidad de un item al carrito
        // {item:{}, quantity}
        if (isInCart(item.id)) {
            let indexItem = cart.findIndex(cartItem => cartItem.item.id === item.id);
            cart[indexItem].quantity += quantity;
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

    const quantityTotal = () => {
        //retorna la cantidad total de items en el carro
        let total = 0
        cart.length !== 0 && cart.forEach(e => {total=total + e.quantity});
        
        return total
    }

    return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, quantityTotal}}>{children}</CartContext.Provider>
}