import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectGalleries,
  selectSearch,
} from "../store/gallery/selectors";
import { getGalleries } from "../store/gallery/slice";
import GalleriesList from "../components/GalleriesList";
import GalleriesFilter from "../components/GalleriesFilter";
function Home() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const search = useSelector(selectSearch);
  useEffect(() => {
    dispatch(getGalleries({ page: currentPage, filter: search }));
  }, []);
  useEffect(() => {
    dispatch(getGalleries({ page: currentPage, filter: search }));
  }, [currentPage]);
  useEffect(() => {
    dispatch(getGalleries({ page: 1, filter: search }));
  }, [search]);
  const galleries = useSelector(selectGalleries);
  return (
    <>
      <GalleriesFilter />
      <GalleriesList galleries={galleries} />
    </>
  );
}

export default Home;
