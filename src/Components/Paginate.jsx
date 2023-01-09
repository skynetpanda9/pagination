import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    paginate(selectedPage + 1);
  };

  return (
    <div className='mt-4'>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageNumbers.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link text-emerald-600 hover:text-emerald-900"}
        previousClassName={"page-item"}
        previousLinkClassName={
          "page-link text-emerald-500 hover:text-emerald-900"
        }
        nextClassName={"page-item"}
        nextLinkClassName={"page-link text-emerald-500 hover:text-emerald-900"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link text-emerald-400 hover:text-emerald-900"}
        activeClassName={"active"}
        forcePage={currentPage}
      />
    </div>
  );
};

export default Paginate;
