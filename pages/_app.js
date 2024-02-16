import '../styles/globals.css';
import Head from 'next/head';


import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';
import bookmarks from '../reducers/bookmarks';


import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(value) {
            return Promise.resolve(value);
        },
        removeItem() {
            return Promise.resolve();
        },
    };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const reducers = combineReducers({ user, bookmarks });

const persistConfig = { key: 'hackaTweet', storage };


const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Next.js App</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
