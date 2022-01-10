import React, { useState } from "react";
import './pagination.css'

const Pagination = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [pages, setPages] = useState(arr);
  
  return (
    <div className="pagination">
      <div className="pages">
        {pages.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
