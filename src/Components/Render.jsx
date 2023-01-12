import React from "react";
import HighCompo from "./Highlighter";

const RenderData = (data, highlight) => {
  const getColor = (color) =>
    color
      ? "w-[30%] text-center font-medium text-green-500"
      : "w-[30%] text-center font-medium text-red-500";
  return data.map((tx, idx) => {
    return (
      <div key={tx.id}>
        <ul className='grid grid-cols-1 py-1 items-center justify-between'>
          <li className='flex flex-row items-start justify-between px-4 my-1 h-10 text-white rounded-md'>
            <p className='w-[30%] text-center'>{idx + 1}</p>
            <div className='w-[60%] text-left'>
              <HighCompo key={tx.id} value={tx.title} highlight={highlight} />
            </div>
            <p className={`${getColor(tx.completed)}`}>{`${tx.completed}`}</p>
          </li>
        </ul>
      </div>
    );
  });
};

export default RenderData;
