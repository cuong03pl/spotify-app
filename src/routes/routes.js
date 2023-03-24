import { config } from "../config";
import SearchPage from "../pages/SearchPage/SeachPage";
import HomePage from "../pages/HomePage/HomePage";
import CreateListPage from "../pages/CreateListPage/CreateListPage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import LyricsPage from "../pages/LyricsPage/LyricsPage";
import QueuePage from "../pages/QueuePage/QueuePage";
import ShowPage from "../pages/ShowPage/ShowPage";
import PlayListPage from "../pages/PlayListPage/PlayListPage";
import EpisodePage from "../pages/EpisodePage/EpisodePage";
import TrackPage from "../pages/TrackPage/TrackPage";
import ArtistPage from "../pages/ArtistPage/ArtistPage";
import AlbumPage from "../pages/AlbumPage/AlbumPage";
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage";
import LibraryPlayListPage from "../pages/LibraryPage/features/LibraryPlayListPage";
import LibraryAlbumPage from "pages/LibraryPage/features/LibraryAlbumPage";
import LibraryPodcastPage from "pages/LibraryPage/features/LibraryPodcastPage";
import LibraryArtistPage from "pages/LibraryPage/features/LibraryArtistPage";

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
    path: config.routes.search_results,
    component: <SearchResultsPage />,
  },

  {
    path: config.routes.library.playlist,
    component: <LibraryPlayListPage />,
  },
  {
    path: config.routes.library.albums,
    component: <LibraryAlbumPage />,
  },
  {
    path: config.routes.library.podcast,
    component: <LibraryPodcastPage />,
  },
  {
    path: config.routes.library.artists,
    component: <LibraryArtistPage />,
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
  {
    path: config.routes.episode,
    component: <EpisodePage />,
  },
  {
    path: config.routes.track,
    component: <TrackPage />,
  },
  {
    path: config.routes.artist,
    component: <ArtistPage />,
  },
  {
    path: config.routes.album,
    component: <AlbumPage />,
  },
];
