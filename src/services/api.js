import axios from "axios";
import { Config } from "../helper/config.js";

const apiUrl = Config.ApiHost;
const axiosApiInstance = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

/**
 * @module UserApi
 * @description API
 * @author
 * @version 1.0.0
 *
 */
const UserApi = {
  FetchFanData: async (data) => {
    return axiosApiInstance.post(`/fan`, {
      first_name: data?.fristName,
      last_name: data?.lastName,
      username: data?.userName,
      email: data?.email,
      password: data?.password,
    });
  },
  FetchTelentData: async (data) => {
    return axiosApiInstance.post(`/talent`, {
      first_name: data?.fristName,
      last_name: data?.lastName,
      username: data?.userName,
      email: data?.email,
      password: data?.password,
    });
  },
};

const Api = {
  Meta: UserApi,
};

export default Api;
