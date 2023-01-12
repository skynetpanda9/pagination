import React from "react";
import { Link } from "react-router-dom";
import { LeftArrow } from "../icons";

const NotFound = () => {
  return (
    <div className='flex flex-row items-start justify-center p-4 bg-emerald-100 min-h-screen'>
      <div className='flex flex-col w-full justify-start items-center'>
        <div className='flex flex-row items-center justify-start w-full'>
          <Link
            to='/'
            className='group text-emerald-900 hover:text-emerald-300 w-auto rounded-md p-2 no-underline font-medium bg-emerald-100 hover:bg-emerald-900'
          >
            <div className='flex flex-row justify-between items-center'>
              <div className='group-hover:text-emerald-300 mx-3'>
                <LeftArrow />
              </div>
              <p className='mr-6 group-hover:text-emerald-300'>Home</p>
            </div>
          </Link>
        </div>
        <div className='flex flex-col w-1/4 h-1/4 box-border rounded-md drop-shadow-md mt-16'>
          <img
            className='rounded-md'
            src='https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000'
            alt='not found'
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
