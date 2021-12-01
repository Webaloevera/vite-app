import React from "react";
import "./filters.css";

const Filters = () => {

// const setDesc = e => [
//   console.log(e)
// ]

  return (
    <div className="filter">
      <div className="filter__controller">
        <p>Select:</p>
        <select name="" onChange={(event) => setDesc(event.target.value)}>
          <option value="">name</option>
          <option value="">name</option>
          <option value="">name</option>
        </select>
      </div>
      <div className="filter__controller">
        <p>Select:</p>
        <select name="" id="">
          <option value="">name</option>
          <option value="">name</option>
          <option value="">name</option>
        </select>
      </div>
      <div className="filter__controller">
        <p>Select:</p>
        <select name="" id="">
          <option value="">name</option>
          <option value="">name</option>
          <option value="">name</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
