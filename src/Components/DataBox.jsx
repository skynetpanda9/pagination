import React, { useState, useEffect } from "react";
import Search from "./Search";
import Paginate from "./Paginate";

const DataBox = ({ data }) => {
  const first5 = data.slice(0, 10);
  console.log(first5);

  return (
    <div className='flex flex-col items-center justify-start h-[85vh] bg-blue-200 rounded-md mt-6 p-4'>
      <Search />
      <div className='flex flex-col p-2 w-full items-center justify-center h-[70vh] relative bg-blue-400 rounded-md shadow-md mt-4'>
        <div className='grid grid-cols-3 text-center font-semibold items-center w-full justify-between bg-white h-10 rounded-md border-none'>
          <p className='pr-[20px]'>Index</p>
          <p>Task</p>
          <p>Complete Status</p>
        </div>
        <div className='bg-white flex w-full h-[62vh] mt-2 overflow-y-scroll scrollbar-hide rounded-md border-none'>
          <div className='flex flex-col w-full justify-between text-center p-4'>
            {first5.map((tx) => {
              return (
                <ul
                  key={tx.id}
                  className='grid grid-cols-1 items-center justify-between'
                >
                  <li className='flex flex-row items-center justify-between px-4'>
                    <p className='w-[40%] text-center'>{tx.id}</p>
                    <p className='w-[60%] text-center'>{tx.title}</p>
                    <p className='w-[40%] text-center'>
                      {JSON.stringify(tx.completed)}
                    </p>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <Paginate />
    </div>
  );
};

export default DataBox;
