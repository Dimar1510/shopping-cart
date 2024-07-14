import ItemCounter from "src/components/ui/ItemCounter";
import { Link } from "react-router-dom";
import { IProduct } from "src/app/types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface IProps {
  id: number;
  quantity: number;
  products: IProduct[];
  deleteItem: ActionCreatorWithPayload<number, "cart/deleteItem">;
}

const CartItem: React.FC<IProps> = ({ id, quantity, products, deleteItem }) => {
  const item = products.find((i) => i.id === id);
  if (item == null || quantity < 1) return null;
  const totalPrice = (quantity * item.price).toFixed(2);
  return (
    <div className="grid gap-x-2 grid-cols-[2fr_auto_100px] grid-rows-2 border-b border-solid border-gray-300 first:border-t py-2 phone:grid-cols-[2fr_auto_50px] phone:gap-x-0">
      <div className="row-span-2">
        <Link
          to={`/shop/${id}`}
          className="flex items-center gap-2 w-fit group"
        >
          <img
            src={item.image_url}
            alt={item.name}
            className="w-[50px] h-[100px] object-cover"
          />
          <div className="uppercase text-sm group-hover:underline">
            {item.name}
          </div>
        </Link>{" "}
      </div>
      <div className="place-content-end">
        <ItemCounter id={id} quantity={quantity} />
      </div>
      <div className="place-content-end text-center font-medium">
        ${totalPrice}
      </div>
      <div className="place-content-center text-sm">1 pack = ${item.price}</div>
      <button
        className="text-sm underline underline-offset-2"
        onClick={() => deleteItem(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
