import React from "react";

const Home = () => {
  return (
    <div className=" w-full h-screen bg-green-800 ">
      <div className=" w-[90%] h-full mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className=" bg-white p-6 w-[30%] rounded-md h-fit">
          <h1 className=" text-2xl lg:4xl font-semibold">Subjects</h1>

          <div className=" mt-3">
            <div className=" capitalize font-medium text-gray-800 mb-1 flex items-center justify-between">
              <p className=" lg:text-lg">english</p>
              <p className=" text-xl">40/100</p>
            </div>
            <div className=" capitalize font-medium text-gray-800 mb-1 flex items-center justify-between">
              <p className=" lg:text-lg">Mathematics</p>
              <p className=" text-xl">0</p>
            </div>
            <div className=" capitalize font-medium text-gray-800 mb-1 flex items-center justify-between">
              <p className=" lg:text-lg">History</p>
              <p className=" text-xl">70/100</p>
            </div>
            <div className=" capitalize font-medium text-gray-800 mb-1 flex items-center justify-between">
              <p className=" lg:text-lg">general knowledge</p>
              <p className=" text-xl">88/100</p>
            </div>
          </div>

          <button className=" bg-black text-white font-medium uppercase rounded px-8 py-3 mt-3">
            Submit
          </button>
        </div>
        <div className=" bg-white p-6 w-[65%] rounded-md h-fit"></div>
      </div>
    </div>
  );
};

export default Home;
