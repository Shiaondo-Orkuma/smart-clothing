import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import RootReducer from "./RootReducer";

const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

//export default { store, persistor };
