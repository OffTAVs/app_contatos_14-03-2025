import axios from "axios";

export const api = axios.create({
  timeout:60000,
  baseURL: "https://api-mong-db-yp8x.onrender.com",
});
