import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext();

function AuthContext({ children }) {
  useEffect(() => {
    const getToken = () => {
      const hash = window.location.hash;

      if (hash) {
        const token = hash
          .substring(1)
          .split("&")
          .find((item) => item.startsWith("access_token"))
          .split("=")[1];
        localStorage.setItem("token", token);
        window.location.hash = "";
        window.location.reload();
      }
      console.log(hash);
    };
    getToken();
  });

  return <TokenContext.Provider value={null}>{children}</TokenContext.Provider>;
}

export default AuthContext;
