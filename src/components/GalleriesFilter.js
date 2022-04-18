import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/gallery/slice";
function GalleriesFilter({ resetCallback }) {
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  // handleSubmit function
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
        <button className='btn' type='button' onClick={() => resetCallback()}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default GalleriesFilter;
