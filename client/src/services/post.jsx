import api from "./apiConfig";

export const getAllPosts = async () => {
  const resp = await api.get("/posts");
  return resp.data;
};

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};

export const postPost = async (foodData) => {
  const resp = await api.post("/posts", { food: foodData });
  return resp.data;
};

export const putPost = async (id, foodData) => {
  const resp = await api.put(`/posts/${id}`, { food: foodData });
  return resp.data;
};

export const deletePost = async (id) => {
  await api.delete(`/posts/${id}`);
};