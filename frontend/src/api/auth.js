import API from "./axios";

export const registerUser = async (userData) => {
  const res = await API.post("/api/users/register", userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await API.post("/api/users/login", userData);
  return res.data;
};
