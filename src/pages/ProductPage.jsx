import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import NotFound from "./NotFound";
import bean from "../assets/images/bean.svg";
import "../styles/ProductPage.css";
import CardButton from "../components/CardButton";
import ProductSection from "../components/ProductSection";
import ImageSlider from "../components/ImageSlider";
import Loading from "../components/Loading";
import { useGetProductQuery } from "../app/services/api";
import { useSelector } from "react-redux";
import { selectItemQuantity } from "../app/cart/cart.slice";

function ProductPage() {
  const params = useParams();
  const productId = Number.parseInt(params.productId);
  const { data, isError, isFetching } = useGetProductQuery(productId);
  const quantity = useSelector((state) => selectItemQuantity(state, productId));
  const [roast, setRoast] = useState([]);
  const product = data ? data[0] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | CoffeeShop`;
      const roastLevel = new Array(5).fill(false);
      for (let i = 0; i < product.roast_level; i++) {
        roastLevel[i] = true;
      }
      setRoast(roastLevel);
    }
  }, [product]);

  if (isError)
    return <p style={{ textAlign: "center" }}>Api error, check back later</p>;
  if (isFetching) return <Loading />;

  if (product)
    return (
      <div className="product page">
        <div className="product_links">
          <Link to={"/"}>Home</Link>/<Link to={"/shop"}>Shop</Link>/
          <Link to={`/${productId}`}>{product.name}</Link>
        </div>
        <div className="product_wrapper">
          <ImageSlider productImage={product.image_url} />
          <div className="product_main">
            <h2 className="product_title">{product.name}</h2>
            <p className="product_description">{product.description}</p>
            <div className="roast-wrapper">
              <div className="product-label">Roast level</div>
              <div className="product-roast">
                {roast.map((level, index) => {
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
            </div>
            <div className="product_region">
              <div className="product-label">Region</div>
              {product.region}
            </div>

            <div className="product_flavors">
              <div className="product-label">Flavor profile</div>
              <div className="flavors-wrapper">
                {product.flavor_profile.map((flavor, index) => {
                  return (
                    <span key={index} className="flavor">
                      {flavor}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="product_grinds">
              <div className="product-label">Grind options</div>
              <div className="grinds-wrapper">
                {product.grind_option.map((grind, index) => {
                  return (
                    <span key={index} className="grind">
                      {grind}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="product_buy">
              <div className="price-wrapper">
                <div className="weight">500g</div>
                <div className="product-price">${product.price}</div>
              </div>
              <CardButton id={product.id} quantity={quantity} />
            </div>
          </div>
        </div>
        <ProductSection description={product.description} />
      </div>
    );
  if (!product && !isFetching)
    <div>
      <NotFound />
    </div>;
}

export default ProductPage;
