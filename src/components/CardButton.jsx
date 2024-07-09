import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ItemCounter from "./ItemCounter";
import PropTypes from "prop-types";
import { useActions } from "../app/hooks/useActions";

function CardButton({ id, quantity }) {
  const { incrementItem } = useActions();

  return (
    <div className="card-button">
      {quantity < 1 ? (
        <button
          className="btn-to-cart"
          onClick={() => {
            incrementItem(id);
          }}
        >
          <ShoppingBagOutlinedIcon />
          Add to cart
        </button>
      ) : (
        <ItemCounter id={id} quantity={quantity} />
      )}
    </div>
  );
}

CardButton.propTypes = {
  id: PropTypes.number,
  quantity: PropTypes.number,
};

export default CardButton;
