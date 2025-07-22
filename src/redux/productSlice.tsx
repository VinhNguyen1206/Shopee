import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { CartProduct, CartState } from "../types/types";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/ReduxStorage";

const initialState: CartState = {
  products: loadFromLocalStorage("products") || [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      console.log(action.payload);
      const existProduct = state.products.find((product) => {
        if (product.id !== action.payload.id) return false;
        if (
          product.chooseVariants.length !== action.payload.chooseVariants.length
        )
          return false;
        return product.chooseVariants.every(
          (variant, index) =>
            variant.variant_id ===
              action.payload.chooseVariants[index].variant_id &&
            variant.option_id === action.payload.chooseVariants[index].option_id
        );
      });
      if (existProduct) {
        existProduct.quantity += action.payload.quantity;
      } else {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      console.log(state.products);
      saveToLocalStorage({ state: state.products, key: "products" });
    },
    updateQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        chooseVariants: CartProduct["chooseVariants"];
        count: number;
      }>
    ) => {
      const item = state.products.find((product) => {
        if (product.id !== action.payload.id) return false;
        if (
          product.chooseVariants.length !== action.payload.chooseVariants.length
        )
          return false;
        return product.chooseVariants.every((variant, index) => {
          return (
            variant.variant_id ===
              action.payload.chooseVariants[index].variant_id &&
            variant.option_id === action.payload.chooseVariants[index].option_id
          );
        });
      });
      if (item) {
        item.quantity = Math.max(1, item.quantity + action.payload.count);
        saveToLocalStorage({ state: state.products, key: "products" });
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{
        id: number;
        chooseVariants: CartProduct["chooseVariants"];
      }>
    ) => {
      state.products = state.products.filter((product) => {
        if (product.id !== action.payload.id) return true;
        if (
          product.chooseVariants.length !== action.payload.chooseVariants.length
        )
          return true;
        const removeItem = product.chooseVariants.every((variant, index) => {
          return (
            variant.variant_id ===
              action.payload.chooseVariants[index].variant_id &&
            variant.option_id === action.payload.chooseVariants[index].option_id
          );
        });
        return !removeItem;
      });
      saveToLocalStorage({ state: state.products, key: "products" });
    },
    clearCart: (state) => {
      alert("Cart Has Been Cleared");
      state.products = [];
      saveToLocalStorage({ state: state.products, key: "products" });
    },
    // buyItems: (state) => {
    //   alert(`Items Have Been Purchased`);
    //   state.products = [];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(buyNewItems.fulfilled, (state) => {
      alert("Purchase Successfull");
      state.products = [];
      saveToLocalStorage({ state: state.products, key: "products" });
    });
    // .addCase(buyNewItems.pending, (state) => {
    //   console.log("Purchasing items ...");
    // })
    // .addCase(buyNewItems.rejected, (state, action) => {
    //   alert(`Purchase failed : ${action.error.message}`);
    // });
  },
});

export const buyNewItems = createAsyncThunk(
  "product/buyItems",
  async (items: CartProduct[]) => {
    await new Promise((time) => setTimeout(time, 1000));
    console.log("Purchase: ", items);
    return { status: "Success", items };
    // const res = await fetch("/api/buyItems", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ items }),
    // });
    // if (!res.ok) {
    //   throw new Error("Failed to complete purchase.");
    // }
    // const data = await res.json();
    // console.log({ data });
    // return data;
  }
);

export const SelectItem = (state: { products: CartState }) =>
  state.products.products.length;

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  // buyItems,
} = productSlice.actions;
export default productSlice.reducer;
