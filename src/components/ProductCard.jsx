import "../styles/ProductCard.css";
import bean from "../assets/images/bean.svg";
import CardButton from "./CardButton";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectItemQuantity } from "../app/cart/cart.slice";

function ProductCard({ id, name, image, price, roast }) {
  const quantity = useSelector((state) => selectItemQuantity(state, id));
  const totalPrice = (quantity * price).toFixed(2);
  const roastLevel = new Array(5).fill(false);
  for (let i = 0; i < roast; i++) {
    roastLevel[i] = true;
  }

  return (
    <div className="card-wrapper">
      <div className="product-card">
        <div className="product-name">{name}</div>
        <Tooltip title="Click to view the product" placement="bottom-end">
          <Link to={`/shop/${id}`} className="card-link">
            <div className="image-wrapper">
              <img
                src={image}
                alt={name}
                className="card-image"
                loading="lazy"
              />
            </div>
          </Link>
        </Tooltip>
        <div className="card-footer">
          <Tooltip title={"Roast level: " + roast} placement="top-start">
            <div className="product-roast">
              {roastLevel.map((level, index) => {
                return (
                  <img
                    key={index}
                    src={bean}
                    alt="bean"
                    className={level ? "bean" : "bean empty"}
                    style={{ width: 15 }}
                  />
                );
              })}
            </div>
          </Tooltip>
          <div className="price-wrapper">
            <div className="weight">500g</div>
            <div className="product-price">
              ${quantity > 1 ? totalPrice : price}
            </div>
          </div>
          <CardButton id={id} quantity={quantity} />
        </div>
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
