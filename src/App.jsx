import React from "react";
import MainPage from "./Components/MainPage";

const App = () => {
  return (
    <div className='font-roboto min-h-screen flex flex-col justify-start items-center p-2 bg-gradient-to-r from-teal-500 to-cyan-500'>
      <MainPage />
    </div>
  );
};

export default App;