import { call, put, takeLatest } from "redux-saga/effects";
import AuthService from "../../services/AuthService";
import {
  login,
  logout,
  register,
  setIsAuthenticated,
  setLoginErrorMsg,
  setUserId,
} from "./slice";

function* loginHandler(action) {
  try {
    yield call(AuthService.login, action.payload);
    yield put(setIsAuthenticated(true));
  } catch (error) {
    yield put(setLoginErrorMsg(error.response.data.message));
  }
}

function* registerHandler(action) {
  try {
    yield call(AuthService.register, action.payload);
    yield put(setIsAuthenticated(true));
  } catch (error) {
    console.log(error);
  }
}

function* logoutHandler() {
  try {
    yield call(AuthService.logout);
    yield put(setIsAuthenticated(false));
    yield put(setUserId(""));
  } catch (error) {
    console.log(error);
  }
}

export function* watchAuth() {
  yield takeLatest(login.type, loginHandler);
  yield takeLatest(register.type, registerHandler);
  yield takeLatest(logout.type, logoutHandler);
}
