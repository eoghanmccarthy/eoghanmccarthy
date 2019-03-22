import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { connectRouter, routerMiddleware } from "connected-react-router";

import { ajax } from "rxjs/ajax";
import { createEpicMiddleware } from "redux-observable";

import rootReducer from "reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["lightbox"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

import { rootEpic } from "app/epics";

const epicMiddleware = createEpicMiddleware({
  dependencies: { getJSON: ajax.getJSON }
});

export default (initialState = {}, history) => {
  const middlewares = [epicMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    connectRouter(history)(persistedReducer),
    composeEnhancers(...enhancers)
  );

  const persistor = persistStore(store);

  epicMiddleware.run(rootEpic);

  return { store, persistor };
};
