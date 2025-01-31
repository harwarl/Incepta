import axios from "axios";
import "dotenv/config";

export const axiosClient = axios.create({
  baseURL: process.env.ALPHABOT_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
