import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContext from "./Auth/Auth";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <Provider store={store}>
          <AuthContext>
            <App />
          </AuthContext>
        </Provider>
      </GlobalStyles>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
