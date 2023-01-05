import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Dna } from "react-loader-spinner";
import DataBox from "./DataBox";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [items, setItems] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };

    const getFullData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const data = await res.json();
      setFullData(data);
    };

    getComments();
    getFullData();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
  };

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
    <div className='flex flex-col w-full'>
      <Header />
      <DataBox
        data={items}
        setDataLimit={setLimit}
        pageCount={pageCount}
        fullData={fullData}
        handleClick={handlePageClick}
      />
    </div>
  );
};

export default MainPage;
