import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const Main = () => {
  const [myApi, setMyApi] = useState([]);
  const [data, setData] = useState([]); // add your data to here
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((data) => data.json())
      .then((json_result) => {
        setData(json_result.results); // set your data to state
        let myApi = renderData(json_result.results); // render your component
        setMyApi(myApi); // set it to state
      });
  }, []);

  const renderData = (data) => {
    return data.map((item, idx) => {
      return (
        <div key={idx}>
          <img src={item.picture.thumbnail} alt='' /> {item.name.first}
          <hr />
        </div>
      );
    });
  };

  // get current post
  const indexOfLastPost = currentPage * postsPerPage; // 1 * 10 = 10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10 - 10 = 0
  const currentPosts = myApi?.slice(indexOfFirstPost, indexOfLastPost); // 0 to 10

  // search users by user input
  const handleSearchInput = (event) => {
    setSearchUser(event.target.value);
    const newData = renderData(
      data.filter((item) =>
        item.name.first.toLowerCase().includes(event.target.value)
      )
    ); // render filtered data
    setMyApi(newData); // and set it to state
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Search onChange={handleSearchInput} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={myApi?.length}
        paginate={paginate}
      />
      {currentPosts}
    </div>
  );
};

const Search = ({ onChange }) => {
  return (
    <div>
      <input
        type='text'
        autoFocus={true}
        placeholder='search users'
        onChange={onChange}
      />
    </div>
  );
};
export default Main;
