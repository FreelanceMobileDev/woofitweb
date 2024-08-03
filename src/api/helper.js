import { apiClient, apiClientUpload } from "./api";
import { LOGIN,REGISTER,BASE_URL,POST_METHOD, IMAGEUPLOAD, UPDATE_PROFESSIONAL_DETAILS, GET_CLIENT, GET_METHOD, GET_GROUP_LIST, GET_PROFILE, GET_CLIENT_DETAILS, GET_RATES, CREATE_OR_UPDATE_CLIENT, GET_TRANNING_SESSION, CREATE_UPDATE_RATE, UPDATE_PROILE, DELETE_RATES, DELETE, DASHBOARD_DATA } from "./url";


  export const imageUpload = (payload) => {
    console.log("imageUpload--->", payload,)
    return apiClientUpload({
      baseURL: BASE_URL,
      method: POST_METHOD,
      url: IMAGEUPLOAD,
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

  export const register = (payload) => {
    console.log("register--->", payload,)
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

  export const update_professional_details = (payload,id) => {
    // console.log("update-professional-details--->", payload,)
    return apiClient({
      baseURL: BASE_URL,
      method: POST_METHOD,
      url: `${UPDATE_PROFESSIONAL_DETAILS}?id=${id}`,
      data: payload,
    });
  };

  export const getClinent = (payload,sort) => {
    // console.log("update-professional-details--->", payload,)
    return apiClient({
      baseURL: BASE_URL,
      method: GET_METHOD,
      url: `${GET_CLIENT}?isArchive=${payload}${sort}`,
      // data: payload,
    });
  };

  export const getGroupList = (payload,) => {
    console.log("GET_GROUP_LIST->", payload,)
    return apiClient({
      baseURL: BASE_URL,
      method: GET_METHOD,
      url: `${GET_GROUP_LIST}?coachId=${payload}`,
      // data: payload,
    });
  };


  export const getProfile = () => {
    console.log("getProfile->")
    return apiClient({
      baseURL: BASE_URL,
      method: GET_METHOD,
      url: `${GET_PROFILE}`,
      // data: payload,
    });
  };
  export const getClientDetails = (id) => {
    console.log("getClientDetails->",id)
    return apiClient({
      baseURL: BASE_URL,
      method: GET_METHOD,
      url: `${GET_CLIENT_DETAILS}?id=${id}`,
      // data: payload,
    });
  };
  export const getRates = (id) => {
    console.log("getRates-====???>",id)
    return apiClient({
      baseURL: BASE_URL,
      method: GET_METHOD,
      url: `${GET_RATES}?coachId=${id}`,
      // data: payload,
    });
  };
  
  export const createOrUpdateClient = (id,payload) => {
    console.log("createOrUpdateClient-====>>>>>>>>",id,payload)
    return apiClient({
      baseURL: BASE_URL,
      method: POST_METHOD,
      url: `${CREATE_OR_UPDATE_CLIENT}?id=${id}`,
      data: payload,
    });
  };

  export const getTranningSession = (payload,) => {
    console.log("getTranningSession--->", payload,)
    return apiClient({
      baseURL: BASE_URL,
      method: GET_METHOD,
      url: `${GET_TRANNING_SESSION}?${payload}`,
      // data: payload,
    });
  };
  
  export const createAndUpdateRate  = (payload,id) => {
    console.log("createAndUpdateRate--->", payload,id)
    return apiClient({
      baseURL: BASE_URL,
      method: POST_METHOD,
      url: `${CREATE_UPDATE_RATE}?${id}`,
      data: payload,
    });
  };

  export const updateProfile  = (payload) => {
    console.log("updateProfile--->>>>>", payload)
    return apiClient({
      baseURL: BASE_URL,
      method: POST_METHOD,
      url: `${UPDATE_PROILE}`,
      data: payload,
    });
  };

  export const deleteRate  = (payload) => {
    console.log("deleteRate--->>>>>", payload)
    return apiClient({
      baseURL: BASE_URL,
      method: DELETE,
      url: `${DELETE_RATES}?id=${payload}`,
      // data: payload,
    });
  };

  export const DashboardData  = (payload) => {
    console.log("DashboardData--->>>>>", payload)
    return apiClient({
      baseURL: BASE_URL,
      method: GET_METHOD,
      url: `${DASHBOARD_DATA}${payload}`,
    });
  };


  