import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { selectUserId } from "../store/auth/selectors";
import {
  selectCreateErrorMsg,
  selectEditErrorMsg,
  selectGallery,
} from "../store/gallery/selectors";
import { createGallery, editGallery, getGallery } from "../store/gallery/slice";
function CreateNewGallery() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [imageList, setImageList] = useState([{ image_url: "" }]);
  const [gallery, setGallery] = useState({
    name: "",
    description: "",
    images: [],
  });
  // getting error messages
  const errorCreate = useSelector(selectCreateErrorMsg);
  const errorEdit = useSelector(selectEditErrorMsg);
  // on edit put all the existing values in input fields
  useEffect(() => {
    if (id) {
      dispatch(getGallery(id));
    } else {
      setGallery({
        name: "",
        description: "",
        images: [],
      });
      setImageList([{ image_url: "" }]);
    }
  }, [id]);
  const fetchedGallery = useSelector(selectGallery);
  useEffect(() => {
    if (id) {
      setGallery({
        name: fetchedGallery.name,
        description: fetchedGallery.description,
        images: fetchedGallery.images,
      });
      setImageList(fetchedGallery.images);
    }
  }, [fetchedGallery]);
  // adding imageList to gallery
  useEffect(() => {
    setGallery({ ...gallery, images: imageList });
  }, [imageList]);
  // handle Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // for editing
    if (id) {
      dispatch(
        editGallery({
          content: { gallery, id },
          meta: {
            onSuccess: () => {
              console.log("go to", `galleries/${id}`);
              history.push(`/galleries/${id}`);
            },
          },
        })
      );
    }
    // for creating
    else {
      dispatch(
        createGallery({
          gallery,
          meta: { onSuccess: () => history.push("/my-galleries") },
        })
      );
    }
  };

  // edit image url function
  function editImageUrl(image, url) {
    const index = imageList.findIndex((img) => img == image);
    setImageList([
      ...imageList.slice(0, index),
      { image_url: url },
      ...imageList.slice(index + 1, imageList.length),
    ]);
  }
  // handleRemove function
  const handleRemove = (image) => {
    setImageList(imageList.filter((img) => img !== image));
  };
  // changing order
  const moveUp = (image) => {
    let newImageList = [...imageList];
    const index = imageList.findIndex((img) => img == image);
    let temp = newImageList[index];
    newImageList[index] = newImageList[index - 1];
    newImageList[index - 1] = temp;
    setImageList(newImageList);
  };
  const moveDown = (image) => {
    let newImageList = [...imageList];
    const index = imageList.findIndex((img) => img == image);
    let temp = newImageList[index];
    newImageList[index] = newImageList[index + 1];
    newImageList[index + 1] = temp;
    setImageList(newImageList);
    setImageList(newImageList);
  };
  // handle Cancel
  const handleCancel = () => {
    if (id) {
      history.push(`/galleries/{id}`);
    } else {
      history.push("/my-galleries");
    }
  };
  // redirect incase of an unauthenticated user
  const userId = useSelector(selectUserId);
  if (id && fetchedGallery && fetchedGallery.user_id !== parseInt(userId)) {
    return <Redirect to='/' />;
  }
  return (
    <div className='continer m-3'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            required
            min='2'
            max='255'
            value={gallery.name}
            placeholder='Enter gallery name...'
            className='form-control'
            onChange={(e) => setGallery({ ...gallery, name: e.target.value })}
          />
          {errorCreate["name"] && (
            <div className='text-danger'>{errorCreate["name"]}</div>
          )}
          {errorEdit["name"] && (
            <div className='text-danger'>{errorEdit["name"]}</div>
          )}
        </div>
        <div className='form-group'>
          <input
            type='text'
            max='1000'
            name='description'
            value={gallery.description}
            placeholder='Enter description...'
            className='form-control'
            onChange={(e) =>
              setGallery({ ...gallery, description: e.target.value })
            }
          />
          {errorCreate["description"] && (
            <div className='text-danger'>{errorCreate["description"]}</div>
          )}
          {errorEdit["description"] && (
            <div className='text-danger'>{errorEdit["description"]}</div>
          )}
        </div>

        {imageList &&
          imageList.map((image, index) => (
            <div key={index}>
              <div className='d-inline-block form-group'>
                <input
                  type='text'
                  name='image'
                  value={image.image_url}
                  placeholder='Enter image URL...'
                  className='form-control'
                  onChange={(e) => editImageUrl(image, e.target.value)}
                />
                {errorCreate[`images.${index}.image_url`] && (
                  <div className='text-danger'>
                    {errorCreate[`images.${index}.image_url`].map((error) => (
                      <p>{error}</p>
                    ))}
                  </div>
                )}
                {errorEdit[`images.${index}.image_url`] && (
                  <div className='text-danger'>
                    {errorEdit[`images.${index}.image_url`].map((error) => (
                      <p>{error}</p>
                    ))}
                  </div>
                )}
              </div>
              {imageList.length > 1 && (
                <div className='d-inline-block'>
                  <button
                    className='btn btn-light m-1'
                    onClick={() => moveUp(image)}
                    type='button'
                    disabled={index === 0}
                  >
                    Move &#8593;
                  </button>
                  <button
                    className='btn btn-light m-1'
                    onClick={() => moveDown(image)}
                    type='button'
                    disabled={index === imageList.length - 1}
                  >
                    Move &#8595;
                  </button>
                  <button
                    type='button'
                    className='btn m-3'
                    onClick={() => handleRemove(image)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          ))}

        <button
          type='button'
          onClick={() => {
            setImageList([...imageList, { image_url: "" }]);
          }}
          className='mb-3 d-block btn btn-light'
        >
          Add another URL
        </button>
        <button type='submit' className='btn btn-light mr-3'>
          Submit
        </button>
        <button type='button' className='btn btn-light' onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CreateNewGallery;
