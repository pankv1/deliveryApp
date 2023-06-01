import { createSlice } from "@reduxjs/toolkit";

const selectedShopSlice = createSlice({
  name:'selectedShop',
  initialState: "McDonald's",
  reducers:{
    setSelectedShop: (state,action) => {
      return action.payload;
    },
  },
});

export const {setSelectedShop} = selectedShopSlice.actions;
export default selectedShopSlice.reducer;