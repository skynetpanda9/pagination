import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Dna } from "react-loader-spinner";
import DataArea from "./DataArea";
import Search from "./Search";
import Paginate from "./Paginate";
import DropMenu from "./DropMenu";
import Highlighter from "react-highlight-words";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [myRenData, setMyRenData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((res) => {
        setData(res);
        setMyRenData(renderData(res));
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, []);

  const renderData = (data, word) => {
    return data.map((tx, idx) => {
      return (
        <div key={tx.id}>
          <ul className='grid grid-cols-1 items-center justify-between'>
            <li className='flex flex-row items-center justify-between px-4 text-white'>
              <p className='w-[40%] text-center'>{idx + 1}</p>
              <Highlighter
                className='w-[60%] text-left'
                highlightClassName='rounded text-emerald-900'
                searchWords={[word]}
                autoEscape={true}
                textToHighlight={tx.title}
              />
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
  const currentPosts =
    myRenData?.length === 0 && query !== ""
      ? "Not Found..."
      : myRenData?.slice(indexOfFirstPost, indexOfLastPost);

  // set page number in pagination
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
          <DropMenu
            limit={postsPerPage}
            setDataLimit={setPostsPerPage}
            setCurrentPage={setCurrentPage}
          />
          <div className='flex flex-row items-center justify-center'>
            <Search
              data={data}
              renderData={renderData}
              setMyRenData={setMyRenData}
              setCurrentPage={setCurrentPage}
              value={query}
              setQuery={setQuery}
            />
          </div>
        </div>
        <DataArea currentPosts={currentPosts} />
        <Paginate
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          totalPosts={myRenData?.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default MainPage;
