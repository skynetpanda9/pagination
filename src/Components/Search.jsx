import React from "react";

const Search = ({ onChange }) => {
  return (
    <div className='w-72 bg-emerald-800/30 backdrop-blur-sm rounded-md py-1 px-2'>
      <input
        type='text'
        style={{
          outline: "none",
          background: "none",
        }}
        className='text-white'
        placeholder='search tasks'
        onChange={onChange}
        autoFocus
      />
    </div>
  );
};

export default Search;
