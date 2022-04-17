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
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoginErrorMsg: (state, action) => {
      state.loginErrorMsg = action.payload;
    },
    ...middlewareActions,
  },
});

export const { setIsAuthenticated, login, setLoginErrorMsg, register, logout } =
  authSlice.actions;
export default authSlice.reducer;
