import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PropTypes from "prop-types";
import { useActions } from "../app/hooks/useActions";

function ItemCounter({ id, quantity }) {
  const { setItem, incrementItem, decrementItem, deleteItem } = useActions();

  return (
    <div className="counter-group">
      <button
        className="btn-change-count"
        onClick={() => {
          decrementItem(id);
        }}
      >
        {quantity > 1 ? <RemoveOutlinedIcon /> : <DeleteOutlineOutlinedIcon />}
      </button>
      <input
        type="number"
        name="count"
        className="input-count"
        min={0}
        max={99}
        value={quantity}
        onInput={(e) => {
          if (e.target.value > 99) return;
          if (e.target.value < 1) deleteItem(id);
          setItem(id, Number(e.target.value));
        }}
      />
      <button
        className="btn-change-count"
        onClick={() => {
          incrementItem(id);
        }}
      >
        <AddOutlinedIcon />
      </button>
    </div>
  );
}

ItemCounter.propTypes = {
  id: PropTypes.number,
  quantity: PropTypes.number,
};

export default ItemCounter;
