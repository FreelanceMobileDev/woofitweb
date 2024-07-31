
import axios from "axios";
// import { Show_Toast } from "../customComponent/toast";
// import { Store } from "../redux/index";
// import { setError, setLoading, setNetworkConnected, setNetworkSpeed,  } from "../redux/reducer";
export const isWeb = 'web';
export const apiClient = axios.create({
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});


export const apiClientUpload = axios.create({
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

apiClient.interceptors.request.use(
    (config) => {

         const state = []
        // console.log("==========>",state?.cookies?.userDetails,"console.log(state?.cookies?.userDetails)============>")
        const token = localStorage.getItem("token")
        // console.log(token,'====token')

        // Store.dispatch(setLoading(true))
        // const isNetworkConnected = state.sliceReducer.isNetworkConnected
        // console.log(isNetworkConnected,"isNetworkConnected====>")
        // if (!isNetworkConnected) {
        //     alert("Please check your Internet Connection")
        //     Store.dispatch(setLoading(true))
        // } else {
        //     //  
        // }
        const accessToken = `${token}`
        if (accessToken) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);




apiClient.interceptors.response.use(
    (response) => {
        //  console.log(response,"response===========>")
        // Store.dispatch(setLoading(false))
        return response;
    },

    async (error) => {
        // Store.dispatch(setLoading(false))
        const { response } = error
         console.log("error---->apimain", response.data)
        // Store.dispatch(setError(response?.data?.message))
        // Show_Toast(error?.response?.data?.message)
        // Show_Toast(error?.response)
        return Promise.reject(error);
    }
);






apiClientUpload.interceptors.request.use(
    (config) => {
        const state = []
        const token = state?.cookies?.userDetails?.data?.access_token
        //  console.log('state=========>',token,'vbjvbj====>')
        // Store.dispatch(setLoading(true))
        // console.log("config----->", config)
        const accessToken = `Bearer ${token}`
        if (accessToken) {
            config.headers["Authorization"] = accessToken;
        }
        return config;
    },
    (error) => {
        // console.log(error, "naveen=======>error=====>")
        Promise.reject(error);
    }
);

apiClientUpload.interceptors.response.use(
    (response) => {
        // console.log("response===========>",response)
        // Store.dispatch(setLoading(false))
        return response;
    },
    async (error) => {
        // Store.dispatch(setLoading(false))
        const { response } = error
        // console.log("error---->apimain", response.data)
        // Store.dispatch(setError(response?.data?.message))
        // Show_Toast(error?.response?.data?.message)
        return Promise.reject(error);
    }
);




export const NetWorkCheckInit = (NetInfo, Connection) => {
    return (dispatch) => {
        if (isWeb) {
            const connect = new Connection()
            connect.init()
            if (connect.info) {
                dispatch(setNetworkSpeed(connect.info.rtt))
            } else {
                dispatch(setNetworkSpeed("not supported"))
            }
            dispatch(setNetworkConnected(window.navigator.onLine));
            window.addEventListener('offline', (e) => {
                dispatch(setNetworkConnected(false))
            });

            window.addEventListener('online', (e) => { dispatch(setNetworkConnected(true)) });
        } 
        // else {
        //     NetInfo.addEventListener(state => {
        //         dispatch(setNetworkConnected(state.isConnected))
        //         if (state.type === "wifi" && state?.details) {
        //             dispatch(setNetworkSpeed(state?.details?.strength !== undefined ? state?.details?.strength : "not supported"))
        //         } else {
        //             dispatch(setNetworkSpeed("not supported"))
        //         }

        //     });

        // }
    }
}














