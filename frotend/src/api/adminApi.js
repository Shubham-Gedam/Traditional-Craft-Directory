import axiosInstance from "./axiosInstance";

export const loginAdmin = (email, password) =>
  axiosInstance.post("/admin/login", { email, password });
export const logoutAdmin = () => axiosInstance.post("/admin/logout");
export const getAdminProfile = () => axiosInstance.get("/admin/me");