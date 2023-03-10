import React from "react";

const Search = ({
  data,
  RenderData,
  setCurrentPage,
  setMyRenData,
  value,
  setQuery,
}) => {
  const handleSearchInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    setCurrentPage(1);
    const newData = RenderData(
      data.filter((item) => item.title.toLowerCase().includes(e.target.value)),
      e.target.value
    );
    setMyRenData(newData);
  };

  return (
    <div className='w-72 bg-emerald-800/30 backdrop-blur-sm rounded-md py-1 px-2'>
      <input
        type='search'
        className='text-white w-full outline-none bg-transparent'
        placeholder='search tasks'
        onChange={handleSearchInput}
        value={value}
      />
    </div>
  );
};

export default Search;
