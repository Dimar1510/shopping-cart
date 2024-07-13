import { useEffect, useMemo } from "react";
import CartItem from "src/components/CartItem/CartItem.jsx";
import { Link } from "react-router-dom";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import Loading from "src/components/Loading";
import { useGetAllProductsQuery } from "src/app/services/api";
import { useSelector } from "react-redux";
import { selectCart, selectTotalQuantity } from "src/app/cart/cart.slice";
import { useActions } from "src/app/hooks/useActions";

const MIN = 20;
const WEIGHT = 500;

function CartPage() {
  const { data, isFetching, isError } = useGetAllProductsQuery();
  const cart = useSelector(selectCart);
  const totalQuantity = useSelector(selectTotalQuantity);
  const { deleteItem, clearCart } = useActions();

  useEffect(() => {
    document.title = `Cart | CoffeeShop`;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartTotalPrice = useMemo((): number => {
    if (!data || data.length < 1) return 0;
    let total = 0;
    cart.map((item) => {
      const product = data.find((i) => i.id === item.id);
      total = product ? total + product.price * item.quantity : 0;
    });
    return total ? Math.round(total * 100) / 100 : 0;
  }, [data, cart]);

  if (isError) return <p>Api error, check back later</p>;
  if (isFetching) return <Loading />;
  if (data)
    return (
      <div className="w-full flex justify-center flex-1">
        <div className="py-8 px-16 w-full max-w-[1200px] self-center relative flex flex-col tablet:px-4">
          {cart.length > 0 ? (
            <>
              <h2 className="text-center uppercase pb-8">Your cart</h2>
              {cartTotalPrice < MIN && (
                <div className="pb-4 italic text-red-900 absolute left-[10%] top-14">
                  Minimum order value is $20
                </div>
              )}
              <div>
                {cart.map((item) => {
                  return (
                    <CartItem
                      key={item.id}
                      products={data}
                      deleteItem={deleteItem}
                      {...item}
                    />
                  );
                })}
              </div>
              <button
                className="underline w-fit self-end mt-4 hover:font-semibold phone:self-start"
                onClick={() => clearCart()}
              >
                Remove all items
              </button>
              <div>
                Total weight:{" "}
                {((totalQuantity * WEIGHT) / 1000).toFixed(2) + "kg"}
              </div>
              <div className="flex flex-col items-end gap-4 phone:items-start mt-4">
                <div className="flex items-center gap-6">
                  <div className="uppercase text-sm items-center">Subtotal</div>
                  <div className="text-3xl">${cartTotalPrice}</div>
                </div>
                <div className="text-sm italic pb-4">
                  Shipping and taxes computed at checkout
                </div>

                <button
                  className="h-8 rounded-lg bg-none p-5 flex items-center justify-center gap-2 border border-solid border-text-clr transition-colors duration-300 focus:bg-text-clr hover:bg-text-clr hover:text-body-clr focus:text-body-clr whitespace-nowrap"
                  onClick={() => alert("Checkout")}
                  disabled={cartTotalPrice < MIN}
                >
                  {cartTotalPrice < MIN
                    ? `Add  $${MIN - cartTotalPrice} worth of items`
                    : "Checkout"}
                </button>
                <Link className="text-sm underline" to={"/shop"}>
                  Keep Shopping
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center gap-8">
                <SentimentDissatisfiedOutlinedIcon sx={{ fontSize: 50 }} />
                <h2 className="font-medium">Your cart is empty</h2>
                <Link className="underline" to={"/shop"}>
                  Shop now
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    );
}

export default CartPage;
