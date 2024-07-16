import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../types";

const initialState: ICartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.find((item) => item.id === id) == null) {
        state.push({ id, quantity: 1 });
      } else {
        state.map((item) => {
          if (item.id === id) {
            item.quantity++;
          } else {
            item;
          }
        });
      }
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.find((item) => item.id === id)?.quantity === 1) {
        return state.filter((item) => item.id !== id);
      } else {
        state.map((item) => {
          if (item.id === id) {
            item.quantity--;
          } else {
            item;
          }
        });
      }
    },
    setItem: (state, action: PayloadAction<{ id: number; count: number }>) => {
      const { id, count } = action.payload;
      if (state.find((item) => item.id === id) == null) {
        state.push({ id, quantity: count });
      } else {
        state.map((item) => {
          if (item.id === id) {
            item.quantity = count;
          } else {
            item;
          }
        });
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    clearCart: () => {
      return initialState;
    },
  },
  selectors: {
    selectCart: (state) => state,
    selectItemQuantity: (state, id) => {
      return state.find((item) => item.id === id)?.quantity || 0;
    },
    selectTotalQuantity: (state) => {
      const total = state.reduce((acc, item) => item.quantity + acc, 0);
      return total < 0 ? 0 : total;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const cartSelectors = cartSlice.selectors;
