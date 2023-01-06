import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
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
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageNumbers.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"flex flex-row justify-content-center"}
        pageClassName={"rounded-md bg-emerald-800/70"}
        pageLinkClassName={
          "page-link rounded-md bg-emerald-800/30 text-emerald-200"
        }
        previousClassName={"rounded-md bg-emerald-800/70 text-emerald-200"}
        previousLinkClassName={
          "page-link rounded-md bg-emerald-800/30 text-emerald-200"
        }
        nextClassName={"rounded-md bg-emerald-800/70 text-emerald-200"}
        nextLinkClassName={
          "page-link rounded-md bg-emerald-800/70 text-emerald-200"
        }
        breakClassName={"rounded-md bg-emerald-800/70 text-emerald-200"}
        breakLinkClassName={
          "page-link rounded-md bg-emerald-800/70 text-emerald-200"
        }
        activeClassName={"active"}
      />
    </div>
  );
};

export default Paginate;

{
  /* <ul className='inline-flex -space-x-px mt-2 p-1 overflow-hidden w-full rounded-md'>
  {pageNumbers.map((number) => (
    <li className='float-left' key={number}>
      <a
        className='px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        onClick={() => paginate(number)}
        href='#'
      >
        {number}
      </a>
    </li>
  ))}
</ul>; */
}
