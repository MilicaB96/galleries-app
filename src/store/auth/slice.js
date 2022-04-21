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
} = authSlice.actions;
export default authSlice.reducer;
