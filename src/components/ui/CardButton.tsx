import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ItemCounter from "./ItemCounter";
import PropTypes from "prop-types";
import { useActions } from "../../app/hooks/useActions";

function CardButton({ id, quantity }: { id: number; quantity: number }) {
  const { incrementItem } = useActions();

  return (
    <div className="flex justify-center items-center w-[150px]">
      {quantity < 1 ? (
        <button
          className="h-8 w-full rounded-lg bg-none p-5 flex items-center justify-center gap-2 border border-solid border-text-clr transition-colors focus:bg-text-clr hover:bg-text-clr hover:text-body-clr focus:text-body-clr whitespace-nowrap text-sm"
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
