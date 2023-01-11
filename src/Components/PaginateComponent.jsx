import React from "react";
import classnames from "classnames";
import { usePagination, DOTSLEFT, DOTSRIGHT } from "../Utils/usePaginate";
import "./Paginate.css";

const PaginateComponent = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      {/* Left navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className='arrow left' />
      </li>

      {paginationRange.map((pageNumber, idx) => {
        // Left Dot
        if (pageNumber === DOTSLEFT) {
          return (
            <li
              key={idx}
              // onClick={() => onPageChange(currentPage - 4)}
              className='pagination-item dots'
            >
              ...
            </li>
          );
        }

        // Right Dot
        if (pageNumber === DOTSRIGHT) {
          return (
            <li
              key={idx}
              // onClick={() => onPageChange(currentPage + 4)}
              className='pagination-item dots'
            >
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={idx}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
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
        onClick={onNext}
      >
        <div className='arrow right' />
      </li>
    </ul>
  );
};

export default PaginateComponent;
