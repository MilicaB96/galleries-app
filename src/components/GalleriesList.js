import { produceWithPatches } from "immer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsHidden } from "../store/gallery/selectors";
import { setCurrentPage } from "../store/gallery/slice";
function GalleriesList({ galleries }) {
  const dispatch = useDispatch();
  const isHidden = useSelector(selectIsHidden);
  return (
    <div className='container m-3 text-center'>
      {galleries.length ? (
        galleries.map((gallery, index) => (
          <div key={index}>
            <h1>
              <Link className='text-dark' to={`galleries/${gallery.id}`}>
                {gallery.name}
              </Link>
            </h1>
            <img
              className='rounded mx-auto d-block'
              style={{
                width: "200px",
                height: "300px",
                objectFit: "cover",
              }}
              src={
                gallery.images.filter((image) => image.order === 1)[0].image_url
              }
              alt='picture'
            />
            <p style={{ fontSize: "1.5em" }}>{gallery.description}</p>
            <span>
              Created by{" "}
              <Link className='text-dark' to={`/autors/${gallery.user_id}`}>
                {gallery.user.first_name} {gallery.user.last_name}
              </Link>{" "}
              <em>{Date(gallery.created_at).toLocaleString()}</em>
            </span>
            <hr />
          </div>
        ))
      ) : (
        <div className='display-4'>No galleries have been created</div>
      )}
      {!isHidden && (
        <button
          className='btn'
          type='button'
          onClick={() => dispatch(setCurrentPage())}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default GalleriesList;