import axios from "axios";

const api = axios.create({
  baseURL: "https://dev.to/api",
  params: {
    api_key: "TnofZfXUiBryZKGGs4yLb6F6",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
