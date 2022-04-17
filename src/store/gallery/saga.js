import { call, put, takeLatest } from "redux-saga/effects";
import GalleryService from "../../services/GalleryService";
import { getGalleries, setGalleries } from "./slice";

function* getGalleriesHandler() {
  try {
    const data = yield call(GalleryService.getAll);
    yield put(setGalleries(data));
  } catch (error) {
    console.log(error);
  }
}
export function* watchGallery() {
  yield takeLatest(getGalleries.type, getGalleriesHandler);
}
