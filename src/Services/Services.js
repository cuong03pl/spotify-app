import { get } from "../utils/request";

export const getUser = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};

export const getList = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
export const getShow = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
export const getPlaylist = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};

export const getEpisode = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};

export const getAlbum = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
export const getArtist = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
export const getArtistAlbum = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
export const getTopTracks = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
export const getRelatedArtists = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};

export const getSearch = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
