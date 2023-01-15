import { get } from "../utils/request";

export const getUser = async (path, params) => {
  const res = await get(path, params);
  return res.data;
};
