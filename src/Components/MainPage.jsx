import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Dna } from "react-loader-spinner";
import DataArea from "./DataArea";
import Search from "./Search";
import Paginate from "./Paginate";
import DropMenu from "./DropMenu";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [myApi, setMyApi] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((res) => {
        setData(res);
        let myApi = renderData(res);
        setMyApi(myApi);
      });
  }, []);

  const renderData = (data) => {
    return data.map((tx) => {
      return (
        <div key={tx.id}>
          <ul className='grid grid-cols-1 items-center justify-between'>
            <li className='flex flex-row items-center justify-between px-4 text-white'>
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
        </div>
      );
    });
  };

  // get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = myApi?.slice(indexOfFirstPost, indexOfLastPost);

  // search users by user input
  const handleSearchInput = (event) => {
    setCurrentPage(1);
    setSearchUser(event.target.value);
    const newData = renderData(
      data.filter((item) =>
        item.title.toLowerCase().includes(event.target.value)
      )
    );
    setMyApi(newData);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return loading ? (
    <div>
      <Dna
        visible={true}
        height='80'
        width='80'
        ariaLabel='dna-loading'
        wrapperStyle={{}}
        wrapperClass='dna-wrapper'
      />
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center w-full'>
      <Header />
      <div className='w-full lg:w-9/12'>
        <div className='flex flex-row w-full items-center justify-between mt-4'>
          <DropMenu limit={postsPerPage} setDataLimit={setPostsPerPage} />
          <Search onChange={handleSearchInput} />
        </div>
        <DataArea currentPosts={currentPosts} />
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={myApi?.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default MainPage;
