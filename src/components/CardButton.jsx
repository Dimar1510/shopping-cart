import { useCart } from "../context/CartContext";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ItemCounter from "./ItemCounter";

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

export default CardButton;
