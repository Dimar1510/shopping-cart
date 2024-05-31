import { useCart } from "../context/CartContext";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ItemCounter from "./ItemCounter";
import PropTypes from "prop-types";

function CardButton({id}) {

    const {getItemCount, incrementItem} = useCart()
    const quantity = getItemCount(id)
    return ( 
        <div className="card-button">
            {quantity < 1
                ?
                <button 
                    className="btn-to-cart"
                    onClick={()=>{
                        incrementItem(id)
                    }}
                >
                    <ShoppingBagOutlinedIcon/>
                Add to cart
                </button>
                :
                    <ItemCounter id={id}/>
                
            }
        </div>
    );
}

CardButton.propTypes = {
    id: PropTypes.number
}

export default CardButton;
