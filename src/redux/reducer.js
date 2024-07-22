import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatUser:{},
  token:'',
  usersList:[],
  messages:[],
  networkSpeed: '',
  isNetworkConnected: true,
  error:"",
  isLoading:false,
}

const sliceReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    
    setInitialChatUser(state, action) {
      state.chatUser = action.payload
    },
    setToken(state, action) {
      state.token = action.payload
    },
    setUserList(state, action) {
      state.usersList = action.payload
    },
    setMessages(state, action) {
      state.messages = action.payload
    },
    setNetworkSpeed: (state, action) => {
      console.log('action', action.payload);
      state.networkSpeed = action.payload;
    },
    setNetworkConnected: (state, action) => {
      return { ...state, isNetworkConnected: action.payload };
    },
    setError:(state, action) => {
      state.error= action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },


  }
})

export const {
  setInitialChatUser,
  setToken,
  setUserList,
  setMessages,
  setLoading,
  setError,
  setNetworkConnected,
  setNetworkSpeed,
} = sliceReducer.actions;
export default sliceReducer.reducer;
