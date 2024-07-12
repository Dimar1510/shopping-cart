import { useEffect, useState } from "react";
import Loading from "src/components/Loading";
import { useGetAllProductsQuery } from "src/app/services/api";
import { useInView } from "react-intersection-observer";
import ProductCard from "src/components/ProductCard/ProductCard.jsx";
import { Tooltip } from "@mui/material";
import HeroLink from "../../components/ui/HeroLink";

const TOTAL = 20;
const LIMIT = 4;

function ShopPage() {
  const [limit, setLimit] = useState(LIMIT);
  const { data, isFetching, isError } = useGetAllProductsQuery(limit);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const random = Math.floor(Math.random() * (TOTAL - 1)) + 1;

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
    <div className="flex flex-col items-center flex-1">
      <div className="flex w-full justify-center mb-8 bg-[url('src/assets/images/shop_banner.jpg')] bg-cover bg-no-repeat text-body-clr relative after:size-full after:bg-black/50 after:absolute">
        <div className="flex flex-col gap-8 z-10 py-20 w-[80%] items-center">
          <h2 className="text-center uppercase text-3xl font-semibold">
            All coffee products
          </h2>
          <p className="text-center self-center max-w-[600px] text-lg">
            Explore our coffee collection with a variety of beans from around
            the world. Classic and dessert varieties: delicate natural notes and
            bright aromatic tastes. Every coffee lover will find his ideal
            drink. Immerse yourself in the magical world of coffee!
          </p>
          <div>
            <HeroLink link={`/shop/${random}`}>Try some coffee</HeroLink>
          </div>
        </div>
      </div>
      {isError && <p className="text-center">Api error, check back later</p>}
      {!data && <Loading />}
      {data && (
        <>
          <section className="p-8 tablet:p-2 w-full">
            <div className="self-start mb-6">
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

            <div className="flex flex-wrap gap-12 justify-center">
              {data.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image_url}
                    roast={item.roast_level}
                    id={item.id}
                  />
                );
              })}
            </div>
            {isFetching && <Loading />}
            <div ref={ref} />
          </section>
        </>
      )}
    </div>
  );
}

export default ShopPage;
