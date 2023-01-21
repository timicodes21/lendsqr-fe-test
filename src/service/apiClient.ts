import axios from "axios";
import { apiBaseUrl } from "../data";

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
