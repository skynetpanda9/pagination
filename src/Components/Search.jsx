import React from "react";

const Search = ({ onChange }) => {
  return (
    <div className='w-72 bg-blue-600 rounded-md py-1 px-2'>
      <input
        type='text'
        style={{
          outline: "none",
        }}
        className='text-blue-100 bg-blue-600'
        placeholder='search tasks'
        onChange={onChange}
        autoFocus
      />
    </div>
  );
};

export default Search;
