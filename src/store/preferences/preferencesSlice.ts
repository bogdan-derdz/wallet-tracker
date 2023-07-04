import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreferencesState {
	dateFilter: string;
}

const initialState: PreferencesState = {
	dateFilter: "",
};

const preferencesSlice = createSlice({
	name: "preferences",
	initialState,
	reducers: {
		setDateFilter(state, action: PayloadAction<string>) {
			state.dateFilter = action.payload;
		},
	},
});

export default preferencesSlice.reducer;
export const { setDateFilter } = preferencesSlice.actions;
