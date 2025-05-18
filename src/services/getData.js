import api from "./api";

export const getArticles = async () => {
  const { data } = await api.get("/articles");
  return data;
};

export const getTags = async () => {
  const { data } = await api.get("/tags");
  return data;
};

export const getVideos = async () => {
  const { data } = await api.get("/videos");
  return data;
};
