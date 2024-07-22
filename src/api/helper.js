import { apiClient, apiClientUpload } from "./api";
import { LOGIN,REGISTER,BASE_URL,POST_METHOD } from "./url";

export const register = (payload) => {
    console.log("login_payload--->", payload,)
    return apiClient({
      baseURL: BASE_URL,
      method: POST_METHOD,
      url: REGISTER,
      data: payload,
    });
  };

  export const login = (payload) => {
    console.log("login_payload--->", payload,)
    return apiClient({
      baseURL: BASE_URL,
      method: POST_METHOD,
      url: LOGIN,
      data: payload,
    });
  };

  export const createCategeory = (payload) => {
    console.log("login_payload--->", payload,)
    return apiClientUpload({
      baseURL: BASE_URL,
      method: POST_METHOD,
      url: CAT_CREATE,
      data: payload,
    });
  };