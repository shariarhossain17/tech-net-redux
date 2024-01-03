import { createSlice, current } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/globalTypes";

import type { PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const currentState = current(state);
      const isExist = currentState.products.find(
        (product) => product._id === action.payload._id
      );

      console.log(isExist);

      if (isExist) {
        isExist.quantity = isExist.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
