import { config } from "../config";
import SearchPage from "../pages/SearchPage/SeachPage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import HomePage from "../pages/HomePage/HomePage";
export const publicRoutes = [
  {
    path: config.routes.home,
    component: <HomePage />,
  },
  {
    path: config.routes.search,
    component: <SearchPage />,
  },
  {
    path: config.routes.library,
    component: <LibraryPage />,
  },
];
