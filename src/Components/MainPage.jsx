import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { Dna } from "react-loader-spinner";
import DataBox from "./DataBox";

const MainPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const { data } = res;
    setTransactions(data);
  };

  useEffect(() => {
    setLoading(true);
    fetchTransactions().then(() => setLoading(false));
  }, []);

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
      <DataBox data={transactions} />
    </div>
  );
};

export default MainPage;
