import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface filterState {
	dateFilter: string;
}

const initialState: filterState = {
	dateFilter: "",
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setDateFilter(state, action: PayloadAction<string>) {
			state.dateFilter = action.payload;
		},
	},
});

export const { setDateFilter } = filterSlice.actions;

export default filterSlice.reducer;
