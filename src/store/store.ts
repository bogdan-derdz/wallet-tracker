import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import preferencesSlice from "./preferences/preferencesSlice";

const rootReducer = combineReducers({
	preferencesSlice,
	[api.reducerPath]: api.reducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
