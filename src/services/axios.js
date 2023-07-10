import axios from "axios";

const AXIOS = axios.create({
  baseURL: "http://localhost:8000",
  // timeout: 1000,
});

AXIOS.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// AXIOS.interceptors.response.use((response) =>
// (error) => {
//   if (error.response.status === 401 || error.response.status === 403) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user_id");
//     window.location = "/login";
//   }
//   return Promise.reject(error);
// });

export default AXIOS;
