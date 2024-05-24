import { createContext, useContext, useMemo, useState } from "react";

export const CartContext = createContext([]);

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider( {children} ) {
    const [cart, setCart] = useState([])

    const totalQuantity = () => {
        const total = cart.reduce((quantity, item) => item.quantity + quantity, 0)
        return total < 0 ? 0 : total
    }

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

    return <CartContext.Provider value={{deleteItem, setItem, getItemCount, incrementItem, decrementItem, cart, totalQuantity}}>
        {children}
    </CartContext.Provider>
}