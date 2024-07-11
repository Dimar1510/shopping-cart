import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../types";

interface RootState {
  cart: ICartItem[];
}
const initialState: ICartItem[] =
  // @ts-ignore
  JSON.parse(localStorage.getItem("cart")) || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItem: (state, action) => {
      const id = action.payload;
      if (state.find((item) => item.id === id) == null) {
        return [...state, { id, quantity: 1 }];
      } else {
        return state.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    },
    decrementItem: (state, action) => {
      const id = action.payload;
      if (state.find((item) => item.id === id)?.quantity === 1) {
        return state.filter((item) => item.id !== id);
      } else {
        return state.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    },
    setItem: (state, action) => {
      const { id, count } = action.payload;
      if (state.find((item) => item.id === id) == null) {
        return [...state, { id, quantity: count }];
      } else {
        return state.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: count };
          } else {
            return item;
          }
        });
      }
    },
    deleteItem: (state: ICartItem[], action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;

export const selectItemQuantity = createSelector(
  [(state: RootState) => state.cart, (state: RootState, id: number) => id],
  (cart, id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }
);

export const selectTotalQuantity = (state: RootState) => {
  const total = state.cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  return total < 0 ? 1 : total;
};
