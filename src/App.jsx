import React from "react";
import MainPage from "./Components/MainPage";
import Main from "./Test/Main";

const App = () => {
  return (
    <div className='min-h-screen flex flex-col justify-start items-center p-2 bg-gradient-to-r from-teal-500 to-cyan-500'>
      {/* <Main /> */}
      <MainPage />
    </div>
  );
};

export default App;
