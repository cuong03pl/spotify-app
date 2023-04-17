const routes = {
  home: "/",
  search: "/search/*",
  search_results: "/search/:id/*",
  library: {
    playlist: "/collection/playlists",
    podcast: "/collection/podcasts",
    artists: "/collection/artists",
    albums: "/collection/albums",
  },
  create_list: "/create-list",
  favourite: "/favourite",
  bookmark: "/bookmark",
  queue: "/queue",
  playlist: "/playlist/:id",
  show: "/show/:id",
  episode: "/episodes/:id",
  artist: "/artists/:id",
  album: "/albums/:id",
  track: "/tracks/:id",
  profile: "/profile",
  error: "*",
};
export default routes;
