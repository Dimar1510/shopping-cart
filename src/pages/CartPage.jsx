import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import useFetch from "../hooks/useFetch";

function CartPage() {
    
    const [products, setProducts] = useState([])
    const { data, error, loading } = useFetch()
    const {cart, deleteItem} = useCart()
    
    useEffect(()=> {
        if (data) {
            setProducts(data)
            console.log(data)
        }
    }, [data])
    
    if (error) return <p>Api error, check back later</p>
    if (loading) return <p>There will be a loading page here</p>


    return (    
        <div className="cart">
            <h2 className="cart-title">Your cart</h2>
            <div className="cart-list">
                {cart.map(item => {
                    return (
                        <CartItem key={item.id} products={products} deleteItem={deleteItem} {...item}/>
                    )
                })}
            </div>
        </div>
    );
}

export default CartPage;