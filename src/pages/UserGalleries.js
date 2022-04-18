import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import GalleriesFilter from "../components/GalleriesFilter";
import GalleriesList from "../components/GalleriesList";
import {
  selectCurrentPage,
  selectGalleries,
  selectSearch,
} from "../store/gallery/selectors";
import { getUserGalleries, reset } from "../store/gallery/slice";
function UserGalleries() {
  // getting Id
  let { id } = useParams();
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const search = useSelector(selectSearch);
  useEffect(() => {
    dispatch(reset());
    dispatch(getUserGalleries({ id }));
  }, []);
  useEffect(() => {
    dispatch(getUserGalleries({ id, page: currentPage, filter: search }));
  }, [search, currentPage]);
  const galleries = useSelector(selectGalleries);
  return (
    <div>
      <GalleriesFilter />
      <GalleriesList galleries={galleries} />
    </div>
  );
}

export default UserGalleries;
