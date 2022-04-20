import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { selectUserId } from "../store/auth/selectors";
import {
  selectCurrentPicture,
  selectGallery,
} from "../store/gallery/selectors";
import {
  deleteGallery,
  getGallery,
  setCurrentPicture,
} from "../store/gallery/slice";
function ViewGallery() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGallery(id));
    dispatch(setCurrentPicture(0));
  }, []);
  const currentPicture = useSelector(selectCurrentPicture);
  // getting Gallery
  const gallery = useSelector(selectGallery);
  // getting userId
  const userId = useSelector(selectUserId);
  // handleDelete
  const handleDelete = () => {
    const deletePrompt = prompt(
      "Are you sure you want to delete this gallery(Y/N)?"
    );
    if (deletePrompt == "Y") {
      dispatch(
        deleteGallery({
          id: id,
          meta: { onSuccess: () => history.push("/my-galleries") },
        })
      );
    }
  };
  return (
    <div className='containter'>
      {gallery.user_id === parseInt(userId) && (
        <div className='m-3  text-right'>
          <button
            className='btn btn-light'
            onClick={() => history.push(`/edit-gallery/${id}`)}
          >
            Edit
          </button>
          <button
            type='button'
            className='btn btn-light ml-2'
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
      <h1 className='text-center display-4'>{gallery.name}</h1>
      {gallery && (
        <h2 className='text-center'>
          <Link to={`/authors/${gallery.user_id}`}>
            {gallery.user.first_name} {gallery.user.last_name}
          </Link>{" "}
          {gallery.created_at}
        </h2>
      )}
      <p className='text-center'>{gallery.description}</p>
      {/* carousel */}
      <div
        id='carouselExampleControls'
        className='carousel slide'
        data-ride='carousel'
      >
        {gallery && (
          <div className='carousel-inner'>
            <div className='carousel-item active '>
              <a
                href={gallery.images[currentPicture].image_url}
                target='_blank'
              >
                <img
                  src={gallery.images[currentPicture].image_url}
                  className='d-block w-100'
                  alt='1 slide'
                />
              </a>
            </div>
          </div>
        )}{" "}
        <button
          className='carousel-control-prev'
          type='button'
          onClick={() => dispatch(setCurrentPicture("prev"))}
        >
          <span
            className='carousel-control-prev-icon'
            // aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          onClick={() => dispatch(setCurrentPicture("next"))}
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </button>
      </div>
    </div>
  );
}

export default ViewGallery;