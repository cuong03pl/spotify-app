import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext();

function AuthContext({ children }) {
  var client_id = "e5ad9e10b9b342db80cc06db790359f7"; // Your client id
  var client_secret = "f629f0d26be64adeb33d9611e0efa50d"; // Your secret
  var redirect_uri = "http://localhost:3000";
  var auth = "https://accounts.spotify.com/authorize";
  //   var scopes = \'user-read-email user-read-private\;
  var response_type = "token";
  const [token, setToken] = useState();
  // console.log(
  //   `${auth}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`
  // );
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
        setToken(localStorage.getItem("token"));
      }
    };
    getToken();
  }, []);

  return (
    <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
  );
}

export default AuthContext;
