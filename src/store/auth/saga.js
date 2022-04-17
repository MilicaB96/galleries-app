import { call, put, takeLatest } from "redux-saga/effects";
import AuthService from "../../services/AuthService";
import { login, setIsAuthenticated, setLoginErrorMsg } from "./slice";

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
export function* watchAuth() {
  yield takeLatest(login.type, loginHandler);
}
