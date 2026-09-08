import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://traditional-craft-directory.onrender.com",
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;