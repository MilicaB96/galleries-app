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
    dispatch(reset());
    dispatch(getMyGalleries({ page: 1, filter: "" }));
  }, []);
  useEffect(() => {
    dispatch(getMyGalleries({ page: currentPage, filter: search }));
  }, [currentPage, search]);
  const galleries = useSelector(selectGalleries);
  // handleReset function
  const handleReset = () => {
    dispatch(getMyGalleries({ page: 1, filter: "" }));
  };
  return (
    <div>
      <GalleriesFilter resetCallback={handleReset} />
      <GalleriesList galleries={galleries} />
    </div>
  );
}

export default MyGalleries;
