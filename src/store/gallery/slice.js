import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getGalleries: () => {},
  loadMore: () => {},
  getMyGalleries: () => {},
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    galleries: [],
    currentPage: 1,
    isHidden: false,
    search: "",
  },
  reducers: {
    setGalleries: (state, action) => {
      state.galleries = action.payload;
    },
    addGalleries: (state, action) => {
      state.galleries.push(...action.payload);
    },
    setIsHidden: (state, action) => {
      state.isHidden = action.payload;
    },
    setCurrentPage: (state) => {
      state.currentPage++;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    reset: (state) => {
      state.search = "";
      state.currentPage = 1;
    },
    ...middlewareActions,
  },
});

export const {
  setGalleries,
  getGalleries,
  loadMore,
  addGalleries,
  setIsHidden,
  setCurrentPage,
  setSearch,
  getMyGalleries,
  reset,
} = gallerySlice.actions;
export default gallerySlice.reducer;
