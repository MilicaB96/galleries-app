import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectGalleries,
  selectSearch,
} from "../store/gallery/selectors";
import { getGalleries, reset } from "../store/gallery/slice";
import GalleriesList from "../components/GalleriesList";
import GalleriesFilter from "../components/GalleriesFilter";
function Home() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const search = useSelector(selectSearch);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(reset());
    dispatch(getGalleries());
  }, []);
  useEffect(() => {
    dispatch(getGalleries({ page: currentPage, filter: search }));
  }, [currentPage, search]);
  const galleries = useSelector(selectGalleries);
  return (
    <>
      <GalleriesFilter />
      <GalleriesList galleries={galleries} />
    </>
  );
}

export default Home;
