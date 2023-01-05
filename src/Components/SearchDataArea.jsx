import React from "react";

const SearchDataArea = ({ data, query }) => {
  return (
    <div className='flex flex-col p-2 w-full items-center justify-center h-[70vh] relative bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md shadow-md mt-2'>
      <div className='grid grid-cols-3 px-3 text-center font-semibold items-center w-full justify-between bg-white h-10 rounded-md border-none'>
        <p>Index</p>
        <p>Task</p>
        <p>Complete Status</p>
      </div>
      <div className='bg-white flex w-full h-[62vh] mt-2 rounded-md border-none'>
        {data.length === 0 && query !== "" ? (
          <div className='cursor-default select-none py-2 px-4 text-gray-700'>
            Nothing found.
          </div>
        ) : (
          <div className='flex flex-col w-full overflow-x-scroll text-center p-4'>
            {data.map((tx) => {
              return (
                <ul
                  key={tx.id}
                  className='grid grid-cols-1 items-center justify-between'
                >
                  <li className='flex flex-row items-center justify-between px-4'>
                    <p className='w-[40%] text-center'>{tx.id}</p>
                    <p className='w-[60%] text-left'>{tx.title}</p>
                    {JSON.stringify(tx.completed) === "false" ? (
                      <p className='w-[40%] text-center font-medium text-red-500'>
                        {JSON.stringify(tx.completed)}
                      </p>
                    ) : (
                      <p className='w-[40%] text-center font-medium text-green-500'>
                        {JSON.stringify(tx.completed)}
                      </p>
                    )}
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDataArea;
