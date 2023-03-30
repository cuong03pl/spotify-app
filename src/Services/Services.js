import { deleteMethod, get, post, put } from "../utils/request";

export const getUser = async (params) => {
  const res = await get("me", params);
  return res.data;
};

export const getList = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
export const getShow = async (id, params) => {
  const res = await get(`shows/${id}`, params);
  return res.data;
};
export const getPlaylist = async (id, params) => {
  const res = await get(`playlists/${id}`, params);
  return res.data;
};

export const getEpisode = async (id, params) => {
  const res = await get(`episodes/${id}`, params);
  return res.data;
};

export const getAlbum = async (id, params) => {
  const res = await get(`albums/${id}`, params);
  return res.data;
};
export const getArtist = async (id, params) => {
  const res = await get(`artists/${id}`, params);
  return res.data;
};
export const getArtistAlbum = async (id, params) => {
  const res = await get(`artists/${id}/albums`, params);
  return res.data;
};
export const getTopTracks = async (id, params) => {
  const res = await get(`artists/${id}/top-tracks`, params);
  return res.data;
};
export const getRelatedArtists = async (id, params) => {
  const res = await get(`artists/${id}/related-artists`, params);
  return res.data;
};

export const getSearch = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
export const getTrack = async (id, params) => {
  const res = await get(`tracks/${id}`, params);
  return res.data;
};
export const getCurrentUserPlaylists = async (params) => {
  const res = await get("me/playlists", params);
  return res.data;
};
export const getCurrentUserShows = async (params) => {
  const res = await get("me/shows", params);
  return res.data;
};
export const getCurrentUserAlbums = async (params) => {
  const res = await get("me/albums", params);
  return res.data;
};
export const getCurrentUserArists = async (params) => {
  const res = await get("me/following", params);
  return res.data;
};
export const getCurrentUserTracks = async (params) => {
  const res = await get("me/tracks", params);
  return res.data;
};

export const getRecommendations = async (params) => {
  const res = await get("recommendations", params);
  return res.data;
};

export const getCurrentPlayingTrack = async (params) => {
  const res = await get("me/player/currently-playing", params);
  return res.data;
};

export const CheckUsersSavedTracks = async (params) => {
  const res = await get("me/tracks/contains", params);
  return res.data;
};

// post
export const postNewPlaylist = async (id, data, params) => {
  const res = await post(`users/${id}/playlists`, data, params);
  return res.data;
};
export const postNewTrack = async (id, data, params) => {
  const res = await post(`playlists/${id}/tracks`, data, params);
  return res.data;
};
export const postFavouriteTracks = async (data, params) => {
  const res = await post("me/tracks", data, params);
  return res.data;
};
// put
export const putNewPlaylistDetails = async (id, data, params) => {
  const res = await put(`playlists/${id}`, data, params);
  return res.data;
};

export const putNewImage = async (id, data, params) => {
  const res = await put(`playlists/${id}/images`, data, params);
  return res.data;
};

export const putFavouriteTrack = async (data, params) => {
  const res = await put(`me/tracks`, data, params);
  return res.data;
};
export const putFollowArtists = async (data, params) => {
  const res = await put(`me/following`, data, params);
  return res.data;
};

// delete

export const deleteTrack = async (id, data) => {
  const res = await deleteMethod(`playlists/${id}/tracks`, data);
  return res.data;
};

export const deleteFavouriteTrack = async (data) => {
  const res = await deleteMethod(`me/tracks`, data);
  return res.data;
};
