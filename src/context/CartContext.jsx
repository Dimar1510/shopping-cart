import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes, { func } from "prop-types";


export const CartContext = createContext([]);

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider( {children} ) {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    )

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    
    const totalQuantity = useMemo(() => {
        const total = cart.reduce((quantity, item) => item.quantity + quantity, 0)
        console.log('cart:' + cart)
        return total < 0 ? 1 : total
    }, [cart]) 

    function getItemCount(id) {
        return cart.find(item => item.id === id)?.quantity || 0
    }

    function incrementItem(id) {
        setCart(current => {
            if (current.find(item => item.id === id) == null) {
                return [...current, {id, quantity: 1}]
            } else {
                return current.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decrementItem(id) {
        
        setCart(current => {
            if (current.find(item => item.id === id)?.quantity === 1) {
                return current.filter(item => item.id !== id)
            } else {
                return current.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function setItem(id, count) {
        setCart(current => {
            if (current.find(item => item.id === id) == null) {
                return [...current, {id, quantity: count}]
            } else {
                return current.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: count}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function deleteItem(id) {
        setCart(current => {
            return current.filter(item => item.id !== id)
        })
    }

    function clearCart() {
        setCart([])
    }

    return <CartContext.Provider value={{clearCart, deleteItem, setItem, getItemCount, incrementItem, decrementItem, cart, totalQuantity}}>
        {children}
    </CartContext.Provider>
}

CartProvider.propTypes = {
    children: PropTypes.node
}