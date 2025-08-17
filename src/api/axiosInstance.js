import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://10.0.2.2:3000/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
