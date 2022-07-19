import axios, {AxiosInstance} from "axios";

const api = axios.create({
    baseURL: "https://easytools.dev.br/api/"
});

export default api;