import axios, {AxiosInstance} from "axios";

const api = axios.create({
    baseURL: "https://v1.easytools/api/"
});

export default api;