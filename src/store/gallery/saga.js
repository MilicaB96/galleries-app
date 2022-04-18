import { call, put, takeLatest } from "redux-saga/effects";
import GalleryService from "../../services/GalleryService";
import {
  addGalleries,
  getGalleries,
  getMyGalleries,
  setGalleries,
  setIsHidden,
} from "./slice";

function* getGalleriesHandler(action) {
  try {
    const data = yield call(GalleryService.getAll, action.payload);
    if (action.payload.page > 1) yield put(addGalleries(data.data));
    else yield put(setGalleries(data.data));

    yield put(setIsHidden(!data.next_page_url));
  } catch (error) {
    console.log(error);
  }
}

function* getMyGalleriesHandler(action) {
  try {
    const data = yield call(GalleryService.getMyGalleries, action.payload);
    if (action.payload.page > 1) yield put(addGalleries(data.data));
    else yield put(setGalleries(data.data));
    yield put(setIsHidden(!data.next_page_url));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGallery() {
  yield takeLatest(getGalleries.type, getGalleriesHandler);
  yield takeLatest(getMyGalleries.type, getMyGalleriesHandler);
}
