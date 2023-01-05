import React, { useState, useEffect } from "react";
import Paginate from "./Paginate";
import DataArea from "./DataArea";
import DropMenu from "./DropMenu";
import SearchDataArea from "./SearchDataArea";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";

const DataBox = ({
  data,
  fullData,
  limit,
  setDataLimit,
  pageCount,
  handleClick,
}) => {
  const [showSearchArea, setShowSearchArea] = useState(false);
  const [query, setQuery] = useState("");

  const filteredData =
    query === ""
      ? []
      : fullData.filter((fullData) =>
          fullData.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
      return;
    }
    if (event.key === "Escape") {
      setShowSearchArea(false);
    }
  });

  return (
    <>
      <div className='flex flex-col items-center justify-start h-[80vh] rounded-md mt-4 p-2'>
        <div className='flex flex-row justify-between items-center w-full'>
          <DropMenu limit={limit} setDataLimit={setDataLimit} />
          {showSearchArea ? (
            <div className='w-72 z-50 flex flex-row cursor-pointer bg-white rounded-md p-1 self-end justify-between'>
              <input
                type='search'
                style={{
                  outline: "none",
                }}
                className='text-blue-900'
                placeholder='Search here'
                onChange={handleChange}
                value={query}
                autoFocus
              />
              <XMarkIcon
                onClick={() => setShowSearchArea(!showSearchArea)}
                className='h-6 w-6 text-blue-900'
              />
            </div>
          ) : (
            <div
              className='z-50 flex flex-row cursor-pointer bg-white rounded-md p-1 items-center justify-center'
              onClick={() => setShowSearchArea(!showSearchArea)}
            >
              <MagnifyingGlassIcon
                onClick={() => setShowSearchArea(!showSearchArea)}
                className='h-5 w-5 text-blue-900'
              />
            </div>
          )}
        </div>
        <DataArea data={data} />
      </div>
      <div className='mt-2'>
        <Paginate pageCount={pageCount} handlePageClick={handleClick} />
      </div>
    </>
  );
};

export default DataBox;
