import React from "react";

const DataArea = ({ currentPosts }) => {
  return (
    <div className='flex flex-col p-2 w-full items-center justify-center h-[70vh] relative bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md shadow-md mt-2'>
      <div className='grid grid-cols-3 px-3 text-center font-semibold items-center w-full justify-between bg-white h-10 rounded-md border-none'>
        <p className=''>Index</p>
        <p>Task</p>
        <p>Complete Status</p>
      </div>
      <div className='bg-white flex w-full h-[62vh] mt-2 rounded-md border-none'>
        <div className='flex flex-col w-full overflow-x-scroll text-center p-4'>
          {currentPosts}
        </div>
      </div>
    </div>
  );
};

export default DataArea;
