import React from "react";
import CardButton from "../ui/CardButton";

interface IProps {
  price: number;
  id: number;
  quantity: number;
}

const AddProduct: React.FC<IProps> = ({ price, id, quantity }) => {
  return (
    <div className="flex w-full justify-between gap-0 flex-wrap">
      <div className="flex flex-col">
        <div className="">500g</div>
        <div className="text-xl font-medium min-w-[7ch]">{`$${price}`}</div>
      </div>
      <CardButton id={id} quantity={quantity} />
    </div>
  );
};

export default AddProduct;
