import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialStateModal = {
  modal: false,
};
const initialStateCount = {
  count: 0,
};
const initialStateCategory = {
  category: "",
};
const productPopUpSlice = createSlice({
  name: "popup",
  initialState: initialStateModal,
  reducers: {
    SHOW_POPUP(state) {
      state.modal = true;
    },
    HIDE_POPUP(state) {
      state.modal = false;
    },
  },
});
const productListSlice = createSlice({
  name: "popup",
  initialState: initialStateCategory,
  reducers: {
    All(state) {
      state.category = "";
    },
    Iphone(state) {
      state.category = "iphone";
    },
    Ipad(state) {
      state.category = "ipad";
    },
    Macbook(state) {
      state.category = "macbook";
    },
    Airpod(state) {
      state.category = "airpod";
    },
    Watch(state) {
      state.category = "watch";
    },
    Mouse(state) {
      state.category = "mouse";
    },
    Keyboard(state) {
      state.category = "keyboard";
    },
    Other(state) {
      state.category = "other";
    },
  },
});

const CartCountSlice = createSlice({
  name: "cartcount",
  initialState: initialStateCount,
  reducers: {
    Increase(state) {
      state.count++;
    },
    Decrease(state) {
      state.count--;
    },
  },
});
const store = configureStore({
  reducer: {
    popup: productPopUpSlice.reducer,
    categoryList: productListSlice.reducer,
    cartCount: CartCountSlice.reducer,
  },
});

export const popupAction = productPopUpSlice.actions;
export const categotyAction = productListSlice.actions;
export const countAction = CartCountSlice.actions;
export default store;
