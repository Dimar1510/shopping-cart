import ItemCounter from "./ItemCounter";
import "../styles/CartItem.css"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartItem({ id, quantity, products, deleteItem }) {

    const item = products.find(i => i.id === id) 
    if (item == null || quantity < 1) return null
    const totalPrice = (quantity * item.price).toFixed(2)
    return (  
        <div className="cart-item">
            <Link to={`/shop/${id}`}
                className="cart-item_img-wrapper"
            >
                <img 
                    src={item.image_url} 
                    alt={item.name} 
                    className="cart-item_img" 
                />
            </Link>
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

CartItem.propTypes = {
    id: PropTypes.number,
    quantity: PropTypes.number,
    products: PropTypes.array,
    deleteItem: PropTypes.func
}

export default CartItem;