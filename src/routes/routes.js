import { config } from "../config";
import SearchPage from "../pages/SearchPage/SeachPage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import HomePage from "../pages/HomePage/HomePage";
import CreateListPage from "../pages/CreateListPage/CreateListPage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import BookMarkPage from "../pages/BookMarkPage/BookMarkPage";
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
  {
    path: config.routes.create_list,
    component: <CreateListPage />,
  },
  {
    path: config.routes.favourite,
    component: <FavouritePage />,
  },
  {
    path: config.routes.bookmark,
    component: <BookMarkPage />,
  },
];
