import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Global } from "./common/Global.tsx";
import "./sass/common/_main.module.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router>
      <Global>
        <StrictMode>
          <App />
        </StrictMode>
      </Global>
    </Router>
  </Provider>
);
