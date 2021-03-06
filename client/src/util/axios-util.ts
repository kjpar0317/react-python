import axios from "axios";
import { toast } from "react-toastify";

const axiosUtils = axios.create({
  baseURL: ""
  // baseURL: `${process.env.REACT_APP_BASE_URI}`,
  // timeout: 30000
});

async function responseValidate(error: any) {
  // 네트워크 연결 오류
  if (!error.response) {
    toast.error("네트워크 연결 오류");
    return "network fail";
  }

  // API 서버 접속 오류
  if (error.response.status === 404 || error.response.status === 504) {
    toast.error("API 서버 연결 오류");
    return "api server connection error";
  }

  if (error.response.data.message) {
    toast.error(error.response.data.message);

    if (error.response.status === 401) {
      localStorage.removeItem("email");
      // localStorage.removeItem("expire");
      localStorage.removeItem("token");

      window.location.replace("/");
    }

    return error.response.data.message;
  }

  if (error.response.data) {
    toast.error(error.response.data);

    if (error.response.status === 401) {
      localStorage.removeItem("email");
      // localStorage.removeItem("expire");
      localStorage.removeItem("token");

      window.location.replace("/");
    }

    return error.response.data;
  }

  if (error.response) {
    return error.response.status;
  }
}

axiosUtils.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      // config.headers['Authorization'] = `Bearer ${token}`
      config.headers["x-access-token"] = token;
    }

    if (config.headers) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  error => {
    toast.error("axios 요청 에러");
    return Promise.reject(error);
  }
);

axiosUtils.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(responseValidate(error));
  }
);

export default axiosUtils;
