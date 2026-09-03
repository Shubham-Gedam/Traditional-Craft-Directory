import axiosInstance from "./axiosInstance";

export const getArtisans = (params = {}) => axiosInstance.get("/artisans", { params });
export const getArtisanById = (id) => axiosInstance.get(`/artisans/${id}`);
export const createArtisan = (data) => axiosInstance.post("/artisans", data);
export const updateArtisan = (id, data) => axiosInstance.put(`/artisans/${id}`, data);
export const verifyArtisan = (id, isVerified) =>
  axiosInstance.patch(`/artisans/${id}/verify`, { isVerified });
export const deleteArtisan = (id) => axiosInstance.delete(`/artisans/${id}`);
export const getArtisanStats = () => axiosInstance.get("/artisans/stats/kpi");