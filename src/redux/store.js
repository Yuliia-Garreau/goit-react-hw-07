import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer } from "./counterSlice";
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
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };
const persistConfig = {
  key: "contacts-persist",

  version: 1,
  storage,
  //   blacklist: ["step"],
  // whitelist: ['step'],
};
// const filtersPersistConfig = {
//   key: "filters-persist",
//   version: 1,
//   storage,
// };
export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    contacts: persistReducer(persistConfig, contactsReducer),
    // filters: persistReducer(persistConfig, filtersReducer),

    // filters: persistReducer(persistConfig, filtersReducer),
    filters: filtersReducer,
  },
  // const rootReducer = combineReducers({
  //   contacts: contactsReducer,
  //   filters: filtersReducer,
  // });

  // const store = configureStore({
  //   reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
