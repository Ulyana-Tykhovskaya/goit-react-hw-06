import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contactsSlice";
import filterReducer from "./filter/filterSlice";
import { combineReducers } from "redux";
const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};
const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsReducer),
  filter: filterReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
