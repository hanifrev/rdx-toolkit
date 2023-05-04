import { createSlice } from "@reduxjs/toolkit";

const initialState = { locations: ["Würzburg", "Berlin", "Dortmund"] };

const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    save: (state, action) => {
      //   const { payload } = param;
      state.locations = [...state.locations, action.payload];
    },
  },
});

// const { actions, reducer } = locationSlice;

// export const { save } = actions;
export const { save } = locationSlice.actions;
// export default reducer;
export default locationSlice.reducer;
