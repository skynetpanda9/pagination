import React from "react";
import PaginateComponent from "./PaginateComponent";

const Paginate = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  return (
    <div className='mt-4'>
      <PaginateComponent
        onPageChange={paginate}
        totalCount={totalPosts}
        currentPage={currentPage}
        pageSize={postsPerPage}
      />
    </div>
  );
};

export default Paginate;
