import bean from "src/assets/images/bean.svg";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectItemQuantity } from "src/app/cart/cart.slice";
import AddProduct from "../AddProduct/AddProduct";

function ProductCard({ id, name, image, price, roast }) {
  const quantity = useSelector((state) => selectItemQuantity(state, id));
  const totalPrice = (quantity * price).toFixed(2);
  const roastLevel = new Array(5).fill(false);
  for (let i = 0; i < roast; i++) {
    roastLevel[i] = true;
  }

  return (
    <div className="min-w-fit rounded-lg flex flex-col p-2 shadow-[1px_1px_15px_0px_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[5px_5px_10px_5px_rgba(0,0,0,0.2)] ">
      <div className="uppercase text-xl text-center mt-2 font-medium tracking-tighter track [word-spacing:6px]">
        {name}
      </div>
      <Tooltip
        title="Click to view the product"
        placement="bottom"
        PopperProps={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -50],
              },
            },
          ],
        }}
      >
        <Link to={`/shop/${id}`} className="card-link">
          <div className="w-[250px] h-[300px] flex">
            <img
              src={image}
              alt={name}
              className="size-full object-cover select-none"
              loading="lazy"
            />
          </div>
        </Link>
      </Tooltip>
      <div className="flex flex-col gap-2">
        <Tooltip title={"Roast level: " + roast} placement="top-start">
          <div className="flex select-none">
            {roastLevel.map((level, index) => {
              return (
                <img
                  key={index}
                  src={bean}
                  alt="bean"
                  className={level ? "" : "empty-bean"}
                  style={{ width: 15 }}
                />
              );
            })}
          </div>
        </Tooltip>
        <AddProduct
          id={id}
          quantity={quantity}
          price={quantity > 1 ? totalPrice : price}
        />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.number,
  image: PropTypes.string,
};

export default ProductCard;
