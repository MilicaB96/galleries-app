export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectLoginErrorMsg = (state) => state.auth.loginErrorMsg;
export const selectUserId = (state) => state.auth.user?.id;
export const selectRegisterErrorMsg = (state) => state.auth.registerErrosMsg;
