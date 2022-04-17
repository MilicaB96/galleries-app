import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectGalleries } from "../store/gallery/selectors";
import { getGalleries } from "../store/gallery/slice";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGalleries());
  }, []);
  const galleries = useSelector(selectGalleries);
  return (
    <div className='container m-3 text-center'>
      {galleries.length ? (
        galleries.map((gallery) => (
          <div key={gallery.id}>
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
              src={gallery.images[0].image_url}
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
        <span className='display-4'>No galleries have been created</span>
      )}
    </div>
  );
}

export default Home;
