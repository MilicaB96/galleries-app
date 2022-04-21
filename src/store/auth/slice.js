import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  login: () => {},
  register: () => {},
  logout: () => {},
  getMyProfile: () => {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("token"),
    loginErrorMsg: "",
    user: null,
    registerErrosMsg: {},
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoginErrorMsg: (state, action) => {
      state.loginErrorMsg = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRegisterErrorMsg: (state, action) => {
      state.registerErrosMsg = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  setIsAuthenticated,
  login,
  setLoginErrorMsg,
  register,
  logout,
  setUser,
  getMyProfile,
  setRegisterErrorMsg,
} = authSlice.actions;
export default authSlice.reducer;
