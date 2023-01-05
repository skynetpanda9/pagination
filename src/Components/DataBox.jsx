import React, { useState, useEffect } from "react";
import Search from "./Search";
import Paginate from "./Paginate";
import DataArea from "./DataArea";
import DropMenu from "./DropMenu";

const DataBox = ({ data, fullData, setDataLimit, pageCount, handleClick }) => {
  const [showSearchArea, setShowSearchArea] = useState(false);
  return (
    <>
      <div className='flex flex-col items-center justify-start h-[80vh] bg-blue-200 rounded-md mt-4 p-2'>
        <div className='flex flex-row justify-between items-center w-full'>
          <DropMenu setDataLimit={setDataLimit} />
          <Search data={fullData} />
        </div>
        <DataArea data={data} />
      </div>
      <div className='mt-2 '>
        <Paginate pageCount={pageCount} handlePageClick={handleClick} />
      </div>
    </>
  );
};

export default DataBox;
