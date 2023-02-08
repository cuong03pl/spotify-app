import { get } from "../utils/request";

export const getUser = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};

export const getPlayList = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};

export const getShow = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
