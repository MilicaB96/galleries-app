import { call, put, takeLatest } from "redux-saga/effects";
import AuthService from "../../services/AuthService";
import {
  login,
  logout,
  register,
  setIsAuthenticated,
  setLoginErrorMsg,
} from "./slice";

function* loginHandler(action) {
  try {
    console.log("Action", action.payload);
    yield call(AuthService.login, action.payload);
    yield put(setIsAuthenticated(true));
    // yield call((window.location.href = "http://localhost:3000"));
  } catch (error) {
    yield put(setLoginErrorMsg(error.response.data.message));
  }
}

function* registerHandler(action) {
  try {
    yield call(AuthService.register, action.payload);
    yield put(setIsAuthenticated(true));
    // yield put((window.location.href = "http://localhost:3000"));
  } catch (error) {
    console.log(error);
  }
}

function* logoutHandler() {
  try {
    yield call(AuthService.logout);
    yield put(setIsAuthenticated(false));
    yield put((window.location.href = "http://localhost:3000/login"));
  } catch (error) {
    console.log(error);
  }
}

export function* watchAuth() {
  yield takeLatest(login.type, loginHandler);
  yield takeLatest(register.type, registerHandler);
  yield takeLatest(logout.type, logoutHandler);
}
