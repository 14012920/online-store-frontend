import { mainStore, store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={mainStore}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
