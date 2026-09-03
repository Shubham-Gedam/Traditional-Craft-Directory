import axiosInstance from "./axiosInstance";

export const getRegions = () => axiosInstance.get("/regions");
export const createRegion = (data) => axiosInstance.post("/regions", data);
export const updateRegion = (id, data) => axiosInstance.put(`/regions/${id}`, data);
export const deleteRegion = (id) => axiosInstance.delete(`/regions/${id}`);