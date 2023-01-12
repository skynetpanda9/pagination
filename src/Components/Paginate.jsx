import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../Utils/usePaginate";
import "./Paginate.css";

const Paginate = ({
  setCurrentPage,
  totalCount,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  // console.log(paginationRange); 7
  // [1, 2, 3, 4, 5, "...", LastPageValue] || [FirstPageView, "...", 16, 17, 18, 19, 20] (length == 7)

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className='mt-4'>
      <ul
        className={classnames("pagination-container", {
          [className]: className,
        })}
      >
        {/* Left navigation arrow */}
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <div className='arrow left' />
        </li>

        {/* Middle Data*/}
        {paginationRange.map((pageNumber, idx) => {
          // Render Dots
          if (pageNumber === DOTS) {
            return (
              <li key={idx} className='pagination-item dots'>
                &#8230;
              </li>
            );
          }

          // Render Page Pills
          return (
            <li
              key={idx}
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}

        {/*  Right Navigation arrow */}
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <div className='arrow right' />
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
