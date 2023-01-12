import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Dna } from "react-loader-spinner";
import DataArea from "./DataArea";
import Search from "./Search";
import Paginate from "./Paginate";
import DropMenu from "./DropMenu";
import RenderData from "./Render";

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
        setMyRenData(RenderData(res));
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // get current post
  const indexOfFirstPost = (currentPage - 1) * postsPerPage;
  const indexOfLastPost = indexOfFirstPost + postsPerPage;
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
              RenderData={RenderData}
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
