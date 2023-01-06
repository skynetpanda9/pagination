import React from "react";

const RenderData = (data) => {
  return (
    <div>
      {data.map((tx) => {
        return (
          <ul
            key={tx.id}
            className='grid grid-cols-1 items-center justify-between'
          >
            <li className='flex flex-row items-center justify-between px-4 text-blue-900'>
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
  );
};

export default RenderData;
