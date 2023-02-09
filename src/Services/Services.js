import { get } from "../utils/request";

export const getUser = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};

export const getAlbum = async (path, params) => {
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
