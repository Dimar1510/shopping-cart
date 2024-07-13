import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "src/pages/notfound/notfound.jsx";
import bean from "src/assets/images/bean.svg";
import ProductSection from "src/components/ProductSection/ProductSection.jsx";
import ImageSlider from "src/components/ImageSlider/ImageSlider.jsx";
import Loading from "src/components/Loading";
import { useGetProductQuery } from "src/app/services/api";
import { selectItemQuantity } from "src/app/cart/cart.slice";
import AddProduct from "../../components/AddProduct/AddProduct";
import { useAppSelector } from "src/app/hooks";
import { IProduct } from "src/app/types";

const ProductPage = () => {
  const params = useParams();
  const productId = params.productId ? +params.productId : 0;
  const { data, isError, isFetching } = useGetProductQuery(productId);
  const quantity = useAppSelector((state) =>
    selectItemQuantity(state, productId)
  );
  const [roast, setRoast] = useState<boolean[]>([]);
  const product: IProduct | undefined = data ? data[0] : undefined;
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
    return <p className="text-center">Api error, check back later</p>;
  if (isFetching) return <Loading />;

  if (product)
    return (
      <div className="w-full flex justify-center">
        <section className="px-16 py-6 flex flex-col gap-4 w-full laptop:px-4 items-center">
          <div className="flex gap-2 self-start">
            <Link to={"/"}>Home</Link>/<Link to={"/shop"}>Shop</Link>/
            <Link to={`/${productId}`} className="font-semibold">
              {product.name}
            </Link>
          </div>
          <div className="flex flex-wrap pb-4 border-b border-solid border-gray-400 gap-x-16 justify-center">
            <ImageSlider productImage={product.image_url} />
            <div className="flex-1 flex flex-col gap-8 self-center mt-4">
              <h2 className="uppercase pb-4 border-b border-solid border-gray-400">
                {product.name}
              </h2>
              <p>{product.description}</p>
              <div className="">
                <div className="text-sm text-gray-500">Roast level</div>
                <div className="flex">
                  {roast.map((level, index) => {
                    return (
                      <img
                        key={index}
                        src={bean}
                        alt="bean"
                        className={level ? "bean" : "empty-bean"}
                        style={{ width: 15 }}
                      />
                    );
                  })}
                </div>
              </div>
              <>
                <div className="text-sm text-gray-500">Region</div>
                {product.region}
              </>

              <>
                <div className="text-sm text-gray-500">Flavor profile</div>
                <div className="flex gap-4 flex-wrap">
                  {product.flavor_profile.map((flavor, index) => {
                    return <span key={index}>{flavor}</span>;
                  })}
                </div>
              </>
              <>
                <div className="text-sm text-gray-500">Grind options</div>
                <div className="flex gap-4 flex-wrap">
                  {product.grind_option.map((grind, index) => {
                    return <span key={index}>{grind}</span>;
                  })}
                </div>
              </>
              <div className="self-start">
                <AddProduct
                  id={productId}
                  price={product.price}
                  quantity={quantity}
                />
              </div>
            </div>
          </div>
          <ProductSection description={product.description} />
        </section>
      </div>
    );
  if (!product && !isFetching)
    <div>
      <NotFound />
    </div>;
};

export default ProductPage;
