import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface filterState {
  value: string;
}

// Define the initial state using that type
const initialState: filterState = {
  value: "",
};

export const filterSlice = createSlice({
  name: "filter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value += 1;
    },
  },
});

export const { increment } = filterSlice.actions;

export default filterSlice.reducer;
