import { configureStore } from "@reduxjs/toolkit";

// https://www.npmjs.com/package/redux-persist
// https://edvins.io/how-to-use-redux-persist-with-redux-toolkit
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default là localstorage

import movieReducer from "./movie/movieSlice";
import userReducer from "./user/userSlice";

const persistConfig = {
  key: "root",
  storage: storage,
};

const reducers = combineReducers({
  movie: movieReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // Fix warning error when implement redux-persist
  // https://stackoverflow.com/a/63244831/8324172
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
