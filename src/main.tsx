import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./s1-main/App";
import store from "./s2-homeworks/hw10/bll/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*для дз 10*/}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
