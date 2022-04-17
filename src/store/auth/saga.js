import { call, put, takeLatest } from "redux-saga/effects";
import AuthService from "../../services/AuthService";
import { login, register, setIsAuthenticated, setLoginErrorMsg } from "./slice";

function* loginHandler(action) {
  try {
    yield call(AuthService.login, action.payload);
    yield put(setIsAuthenticated(true));
    yield put(window.open("http://localhost:3000", "_self"));
  } catch (error) {
    console.log(error);
    yield put(setLoginErrorMsg(error.response.data.message));
  }
}

function* registerHandler(action) {
  try {
    yield call(AuthService.register, action.payload);
    yield put(setIsAuthenticated(true));
    yield put(window.open("http://localhost:3000", "_self"));
  } catch (error) {
    console.log(error);
  }
}

export function* watchAuth() {
  yield takeLatest(login.type, loginHandler);
  yield takeLatest(register.type, registerHandler);
}
