import { useEffect, useState } from "react";
import "../styles/ProductsGrid.css";
import "../styles/ShopPage.css";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useGetAllProductsQuery } from "../app/services/api";
import { useInView } from "react-intersection-observer";
import ProductCard from "../components/ProductCard";
import { Tooltip } from "@mui/material";

const TOTAL = 20;
const LIMIT = 4;

function ShopPage() {
  const [limit, setLimit] = useState(LIMIT);
  const { data, isFetching, isError } = useGetAllProductsQuery(limit);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const random = Math.floor(Math.random() * TOTAL - 1) + 1;

  // api sadly doesn't provide page endpoint
  useEffect(() => {
    if (inView && !isFetching && limit < TOTAL) {
      setLimit((prev) => prev + 4);
    }
  }, [inView, isFetching]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shop online | CoffeeShop";
  }, []);

  return (
    <>
      <div className="shop page">
        <section className="banner">
          <div className="banner-wrapper">
            <h2 className="banner-title">All coffee products</h2>
            <p className="banner-content">
              Explore our coffee collection with a variety of beans from around
              the world. Classic and dessert varieties: delicate natural notes
              and bright aromatic tastes. Every coffee lover will find his ideal
              drink. Immerse yourself in the magical world of coffee!
            </p>
            <Link to={`/shop/${random}`} className="hero-link">
              Random coffee
            </Link>
          </div>
        </section>
        {isError && (
          <p style={{ textAlign: "center" }}>Api error, check back later</p>
        )}
        {!data && <Loading />}
        {data && (
          <>
            <div className="filters-wrapper">
              <div className="products-shown">
                <Tooltip
                  placement="top"
                  title={
                    data.length === TOTAL
                      ? "All products are loaded"
                      : "Scroll down to load the rest"
                  }
                >
                  <span>
                    Products shown: {data.length} / {TOTAL}
                  </span>
                </Tooltip>
              </div>
            </div>
            <div className="products">
              {data.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image_url}
                    roast={item.roast_level}
                    id={item.id}
                    region={item.region}
                  />
                );
              })}
              {isFetching && <Loading />}
            </div>

            <div ref={ref} />
          </>
        )}
      </div>
    </>
  );
}

export default ShopPage;
