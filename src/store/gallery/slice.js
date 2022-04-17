import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getGalleries: () => {},
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    galleries: [],
  },
  reducers: {
    setGalleries: (state, actions) => {
      state.galleries = actions.payload;
    },
    ...middlewareActions,
  },
});

export const { setGalleries, getGalleries } = gallerySlice.actions;
export default gallerySlice.reducer;
