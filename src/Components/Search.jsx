import React from "react";

const Search = ({
  data,
  renderData,
  setCurrentPage,
  setMyRenData,
  value,
  setQuery,
}) => {
  const handleSearchInput = (e) => {
    setQuery(e.target.value);
    setCurrentPage(1);
    const newData = renderData(
      data.filter((item) => item.title.toLowerCase().includes(e.target.value))
    );
    setMyRenData(newData);
  };

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
        onChange={handleSearchInput}
        value={value}
        autoFocus
      />
    </div>
  );
};

export default Search;
