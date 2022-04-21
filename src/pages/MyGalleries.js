import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GalleriesFilter from "../components/GalleriesFilter";
import GalleriesList from "../components/GalleriesList";
import {
  selectCurrentPage,
  selectGalleries,
  selectSearch,
} from "../store/gallery/selectors";
import { getMyGalleries, reset } from "../store/gallery/slice";
function MyGalleries() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const search = useSelector(selectSearch);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(reset());
    dispatch(getMyGalleries({ page: 1, filter: "" }));
  }, []);
  useEffect(() => {
    dispatch(getMyGalleries({ page: currentPage, filter: search }));
  }, [currentPage, search]);
  const galleries = useSelector(selectGalleries);
  return (
    <div>
      <GalleriesFilter />
      <GalleriesList galleries={galleries} />
    </div>
  );
}

export default MyGalleries;
