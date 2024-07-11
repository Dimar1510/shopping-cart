import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "src/app/hooks";
import { selectItemQuantity } from "src/app/cart/cart.slice";
import { useGetProductQuery } from "src/app/services/api";
import { IProduct } from "src/app/types";
import Loading from "../Loading";

const FeaturedProduct = ({
  id,
  right = false,
}: {
  id: number;
  right?: boolean;
}) => {
  const quantity = useAppSelector((state) => selectItemQuantity(state, id));
  const { data, isError, isFetching } = useGetProductQuery(id);
  const product: IProduct | undefined = data ? data[0] : undefined;

  if (isError)
    return <p className="text-center">Api error, check back later</p>;
  if (isFetching) return <Loading />;
  if (product)
    return (
      <div
        className={`flex gap-x-10 p-4 tablet:p-0 laptop:flex-col tablet:m-w-[200px] desktop:w-full w-[70%] max-w-[800px] ${
          right && "flex-row-reverse self-end"
        }`}
      >
        <Tooltip title="Click to view the product" placement="top">
          <Link
            to={`/shop/${id}`}
            className="flex justify-center overflow-hidden min-w-[200px] min-h-[400px]"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className=" w-[300px] min-w-[200px]  object-cover scale-150"
              loading="lazy"
            />
          </Link>
        </Tooltip>
        <div className="flex flex-col justify-between p-4 gap-4">
          <h4 className="uppercase font-bold text-xl">Bali bliss</h4>
          <p>{product.description}</p>
          <div className="self-start">
            <AddProduct price={product.price} id={id} quantity={quantity} />
          </div>
        </div>
      </div>
    );
};

export default FeaturedProduct;
