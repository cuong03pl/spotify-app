import { get } from "../utils/request";

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
