import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    inputVal: "",
    selectedCategories: ["dress", "food", "drink", "mobile"],
    allData: [],
    Cart: []
  },
  reducers: {
    setInput: (state, action) => {
      state.inputVal = action.payload;
    },
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(
          (cat) => cat !== category
        );
      } else {
        state.selectedCategories.push(category);
      }
    },
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
    addtoCart: (state, action) => {
      const item = action.payload;
      const itemExists = state.Cart.find(cartItem => cartItem.id === item.id);
      if (!itemExists) {
        state.Cart.push(item);
      } else {
        itemExists.quantity += item.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload; // Use itemId directly as payload
      state.Cart = state.Cart.filter(cartItem => cartItem.id != itemId); // Filter by itemId
      console.log(state.Cart);
      
    },
  },
});

export const { setInput, toggleCategory, setAllData, addtoCart, removeFromCart } = userSlice.actions;
export default userSlice.reducer;
