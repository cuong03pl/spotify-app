import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout";
import { publicRoutes } from "./routes/routes";
import { Fragment } from "react";

function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Comp = route.component;
          let Layout = DefaultLayout;
          if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout>{Comp}</Layout>}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
