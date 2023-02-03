import { config } from "../config";
import SearchPage from "../pages/SearchPage/SeachPage";
import LibraryPage from "../pages/LibraryPage/LibraryPage";
import HomePage from "../pages/HomePage/HomePage";
import CreateListPage from "../pages/CreateListPage/CreateListPage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import BookMarkPage from "../pages/BookMarkPage/BookMarkPage";
import LyricsPage from "../pages/LyricsPage/LyricsPage";
import QueuePage from "../pages/QueuePage/QueuePage";
import ShowPage from "../pages/ShowPage/ShowPage";
import PlayListPage from "../pages/PlayListPage/PlayListPage";
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
  {
    path: config.routes.lyrics,
    component: <LyricsPage />,
  },
  {
    path: config.routes.queue,
    component: <QueuePage />,
  },
  {
    path: config.routes.show,
    component: <ShowPage />,
  },
  {
    path: config.routes.playlist,
    component: <PlayListPage />,
  },
];
