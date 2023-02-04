import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContext from "./Auth/Auth";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <AuthContext>
          <App />
        </AuthContext>
      </GlobalStyles>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
