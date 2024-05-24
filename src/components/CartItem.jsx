import ItemCounter from "./ItemCounter";
import "../styles/CartPage.css"

function CartItem({ id, quantity, products, deleteItem }) {

    const item = products.find(i => i.id === id) 
    if (item == null || quantity < 1) return null
    const totalPrice = (quantity * item.price).toFixed(2)
    return (  
        <div className="cart-item">
            <img src={item.image_url} alt={item.name} className="cart-item_img" />
            <div className="cart-item_name">{item.name}</div>
            <div className="cart-item_counter">
                <ItemCounter id={id}/>
            </div>
            <div className="cart-item_totalprice">${totalPrice}</div>
            <div className="cart-item_price">1 pack = ${item.price}</div>
            <button 
                className="btn-cart-delete"
                onClick={()=>deleteItem(id)}
            >
                Remove
            </button>
        </div>
    );
}

export default CartItem;