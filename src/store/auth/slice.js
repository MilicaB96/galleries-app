import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  login: () => {},
  register: () => {},
  logout: () => {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    loginErrorMsg: "",
    userId: "",
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoginErrorMsg: (state, action) => {
      state.loginErrorMsg = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
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
  setUserId,
} = authSlice.actions;
export default authSlice.reducer;
