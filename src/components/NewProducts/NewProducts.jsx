import { useSelector } from "react-redux";
import newProduct from "src/assets/images/product_new.png";
import newProduct2 from "src/assets/images/product_new_2.png";
import { Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { selectItemQuantity } from "src/app/cart/cart.slice";
import AddProduct from "../AddProduct/AddProduct";

function NewProducts() {
  const quantityOne = useSelector((state) => selectItemQuantity(state, 17));
  const quantityTwo = useSelector((state) => selectItemQuantity(state, 18));
  return (
    <section className="flex flex-col items-center gap-8 w-full">
      <h3 className="self-baseline uppercase font-semibold">New Arrivals</h3>
      <div className="flex flex-col gap-8 justify-center w-full">
        <div className="flex p-4 self-end tablet:p-0 laptop:flex-col-reverse tablet:m-w-[200px] desktop:w-full w-[70%] max-w-[800px]">
          <div className="flex flex-col justify-between p-4 gap-4">
            <h4 className="uppercase font-bold text-xl">Sumatra blend</h4>
            <p>
              Get your day started with the bold and earthy flavors of Sumatra.
              Grown on the lush tropical slopes of the Gayo Highlands, this
              coffee is known for its full body, low acidity, and notes of dark
              chocolate and smoke.
            </p>
            <div className="self-end">
              <AddProduct price={11.99} id={18} quantity={quantityTwo} />
            </div>
          </div>

          <Tooltip title="Click to view the product" placement="top">
            <Link to={`/shop/17`} className="flex justify-center">
              <img
                src={newProduct2}
                alt="Sumatra blend"
                className="w-[200px] min-w-[200px] object-contain"
                loading="lazy"
              />
            </Link>
          </Tooltip>
        </div>
        <Divider />
        <div className="flex p-4 tablet:p-0 laptop:flex-col tablet:m-w-[200px] desktop:w-full w-[70%] max-w-[800px]">
          <Tooltip title="Click to view the product" placement="top">
            <Link to={`/shop/18`} className="flex justify-center">
              <img
                src={newProduct}
                alt="Bali bliss"
                className="w-[200px] min-w-[200px] object-contain"
                loading="lazy"
              />
            </Link>
          </Tooltip>
          <div className="flex flex-col justify-between p-4 gap-4">
            <h4 className="uppercase font-bold text-xl">Bali bliss</h4>
            <p>
              Escape to the tropical paradise of Bali with this smooth and
              mellow blend. Grown on small family farms, this coffee is
              shade-grown and hand-picked for a rich and nuanced flavor profile.
              Notes of milk chocolate, hazelnut, and a hint of tropical fruit.
            </p>
            <div className="self-start">
              <AddProduct price={11.99} id={18} quantity={quantityTwo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewProducts;
