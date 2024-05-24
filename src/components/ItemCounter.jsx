import { useCart } from "../context/CartContext";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

function ItemCounter({id}) {
    const {setItem, getItemCount, incrementItem, decrementItem, deleteItem} = useCart()
    const quantity = getItemCount(id)
    return (  
        <div className="counter-group">
            <button 
                className="btn-change-count"
                onClick={()=>{
                    decrementItem(id)
                }}
            >
                <RemoveOutlinedIcon/>
            </button>
            <input 
                type="number" 
                name="count" 
                className="input-count" 
                min={0} 
                max={99} 
                value={quantity}
                onInput={(e)=>{
                        if (e.target.value > 99) return
                        if (e.target.value < 1) deleteItem(id)
                        setItem(id, Number(e.target.value))
                    }
                }
            />
            <button 
                className="btn-change-count"
                onClick={()=>{
                    incrementItem(id)
                }}
            >
                <AddOutlinedIcon/>
            </button>
        </div> 
    );
}

export default ItemCounter;