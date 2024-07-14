import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useActions } from "../../app/useActions";

function ItemCounter({ id, quantity }: { id: number; quantity: number }) {
  const { setItem, incrementItem, decrementItem, deleteItem } = useActions();

  return (
    <div className="flex justify-between w-full px-2 items-center gap-2 phone:gap-1">
      <button
        className=""
        onClick={() => {
          decrementItem(id);
        }}
      >
        {quantity > 1 ? <RemoveOutlinedIcon /> : <DeleteOutlineOutlinedIcon />}
      </button>
      <input
        type="number"
        name="count"
        className="w-10 text-center outline-none border-solid border-text-clr border rounded-lg"
        min={0}
        max={99}
        value={quantity}
        onChange={(e) => {
          const count = Number.parseInt(e.target.value);
          if (Number.isInteger(count) && count < 100) {
            count < 1
              ? deleteItem(id)
              : setItem({ id, count: Number.parseInt(e.target.value) });
          }
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
export default ItemCounter;
