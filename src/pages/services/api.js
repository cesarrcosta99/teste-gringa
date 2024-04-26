import axios from "axios";

 const api = axios.create({
  baseURL: "https://the-one-api.dev/v2",
});

api.interceptors.request.use(async (config) => {
  const token = "NZ8CYxK2a15oWv_eUA26";
  config.headers.authorization=`Bearer ${token}`;

  return config;
});

export default api
