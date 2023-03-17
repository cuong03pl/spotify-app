import axios from "axios";

export const request = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const get = async (path, params) => {
  const res = await request.get(path, params);
  return res;
};

export const post = async (path, data, params) => {
  const res = await request.post(path, data, params);
  return res;
};

export const put = async (path, data, params) => {
  const res = await request.put(path, data, params);
  return res;
};
