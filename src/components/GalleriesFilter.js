import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/gallery/slice";
function GalleriesFilter() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(filter));
  };
  return (
    <div className='containter-fluit m-3'>
      <form onSubmit={handleSubmit}>
        <div className='form-group d-inline-block'>
          <input
            type='text'
            name='filter'
            value={filter}
            className='form-control'
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <button type='submit' className='btn'>
          Filter
        </button>
      </form>
    </div>
  );
}

export default GalleriesFilter;
