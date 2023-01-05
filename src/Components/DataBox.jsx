import React, { useState, useEffect } from "react";
import Search from "./Search";
import Paginate from "./Paginate";
import DataArea from "./DataArea";

const DataBox = ({ data, fullData, pageCount, handleClick }) => {
  return (
    <>
      <div className='flex flex-col items-center justify-start h-[80vh] bg-blue-200 rounded-md mt-4 p-2'>
        <Search data={fullData} />
        <DataArea data={data} />
      </div>
      <div className='mt-2'>
        <Paginate pageCount={pageCount} handlePageClick={handleClick} />
      </div>
    </>
  );
};

export default DataBox;
