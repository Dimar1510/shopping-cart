import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];
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
    deleteItem: (state, action) => {
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
export const selectCart = (state) => state.cart;

export const selectItemQuantity = createSelector(
  [(state) => state.cart, (state, id) => id],
  (cart, id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }
);

export const selectTotalQuantity = (state) => {
  const total = state.cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  return total < 0 ? 1 : total;
};