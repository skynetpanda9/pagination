import React from "react";

const DataArea = ({ currentPosts }) => {
  return (
    <div className='flex flex-col p-2 w-full items-center justify-center h-[70vh] relative backdrop-blur-sm  bg-emerald-800/30 rounded-md shadow-md mt-2'>
      <div className='grid grid-cols-3 px-3 text-center text-white font-semibold items-center w-full justify-between bg-emerald-800/30 h-10 rounded-md border-none'>
        <p>Index</p>
        <p>Task</p>
        <p>Complete Status</p>
      </div>
      <div className='bg-emerald-800/30 flex w-full h-[62vh] mt-2 rounded-md border-none'>
        <div className='flex flex-col w-full overflow-y-scroll text-center scrollbar-hide text-white p-4'>
          {currentPosts}
        </div>
      </div>
    </div>
  );
};

export default DataArea;
