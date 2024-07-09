import { useEffect } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import "../styles/CartPage.css";
import Loading from "../components/Loading";
import { useGetAllProductsQuery } from "../app/services/api";
import { useSelector } from "react-redux";
import { selectCart, selectTotalQuantity } from "../app/cart/cart.slice";
import { useActions } from "../app/hooks/useActions";

const MIN = 20;
const ITEMWEIGHT = 500;

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

  if (isError) return <p>Api error, check back later</p>;
  if (isFetching) return <Loading />;

  const cartTotalPrice = () => {
    if (data.length === 0) return 0;
    let total = 0;
    cart.map((item) => {
      const product = data.find((i) => i.id === item.id);
      total += product.price * item.quantity;
    });
    return total.toFixed(2);
  };

  if (data)
    return (
      <div className="cart page">
        {cart.length > 0 ? (
          <>
            <h2 className="cart_title">Your cart</h2>
            {cartTotalPrice() < MIN && (
              <div className="min-order">Minimum order value is $20</div>
            )}
            <div className="cart_list">
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
            <button className="btn-cart_clear" onClick={clearCart}>
              Remove all items
            </button>
            <div className="cart_weight">
              Total weight:{" "}
              {((totalQuantity * ITEMWEIGHT) / 1000).toFixed(2) + "kg"}
            </div>
            <div className="cart_checkout">
              <div className="cart_total">
                <div className="total-label">Subtotal</div>
                <div className="total-amount">${cartTotalPrice()}</div>
                <div className="total-text">
                  Shipping and taxes computed at checkout
                </div>
              </div>

              <button
                className="btn-to-cart"
                onClick={() => alert("Chekout")}
                disabled={cartTotalPrice() < MIN}
              >
                {cartTotalPrice() < MIN
                  ? `Add  $${MIN - cartTotalPrice()} worth of items`
                  : "Checkout"}
              </button>
              <Link className="shop-link" to={"/shop"}>
                Keep Shopping
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="cart-empty">
              <SentimentDissatisfiedOutlinedIcon
                className="empty-icon"
                sx={{ fontSize: 50 }}
              />
              <h2 className="empty-title">Your cart is empty</h2>
              <Link className="shop-link" to={"/shop"}>
                Shop now
              </Link>
            </div>
          </>
        )}
      </div>
    );
}

export default CartPage;
