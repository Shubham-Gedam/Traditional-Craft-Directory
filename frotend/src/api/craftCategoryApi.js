import axiosInstance from "./axiosInstance";

export const getCraftCategories = () => axiosInstance.get("/craft-categories");
export const createCraftCategory = (data) => axiosInstance.post("/craft-categories", data);
export const updateCraftCategory = (id, data) => axiosInstance.put(`/craft-categories/${id}`, data);
export const deleteCraftCategory = (id) => axiosInstance.delete(`/craft-categories/${id}`);