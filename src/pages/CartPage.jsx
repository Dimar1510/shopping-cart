import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "../styles/CartPage.css"

function CartPage() {
    
    const [products, setProducts] = useState([])
    const { data, error, loading } = useFetch()
    const {cart, deleteItem} = useCart()
    
    useEffect(()=> {
        if (data) {
            setProducts(data)
        }
    }, [data])
    
    if (error) return <p>Api error, check back later</p>
    if (loading) return <p>There will be a loading page here</p>

    const cartTotalPrice = () => {
        if(products.length === 0) return 0
        let total = 0
        cart.map(item => {
            const product = products.find(i => i.id === item.id)
            total += product.price * item.quantity 
        })
        return total.toFixed(2)
    }


    return (    
        <div className="cart page">
            {cart.length > 0 
            ?   <>
                    <h2 className="cart_title">Your cart</h2>
                    <div className="cart_list">
                        {cart.map(item => {
                            return (
                                <CartItem key={item.id} products={products} deleteItem={deleteItem} {...item}/>
                            )
                        })}
                    </div>
                    <div className="cart_checkout">
                        <div className="cart_total">
                            <div className="total-label">Subtotal</div>
                            <div className="total-amount">${cartTotalPrice()}</div>
                            <div className="total-text">Shipping and taxes computed at checkout</div>
                        </div>
                        <button 
                            className="btn-cart"
                            onClick={()=> alert('Chekout')}
                        >Checkout</button>
                        <Link className="shop-link" to={'/shop'}>Keep Shopping</Link>
                    </div>
                </>
            : 
                <>
                    <div className="cart-empty">
                        <h2 className="empty-title">Your cart is empty</h2>
                        <Link className="btn-cart" to={'/shop'}>Shop now</Link>
                    </div>
                </>
            }
        </div>
    );
}

export default CartPage;