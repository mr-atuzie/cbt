import React from "react";
import { useSelector } from "react-redux";

const SubmitModal = () => {
  const year = new Date().getFullYear();
  const results = useSelector((state) => state.results.scores);
  return (
    <article className=" w-[90%] lg:w-[40%] p-6 bg-green-100">
      <h1 className=" text-center text-4xl font-extrabold text-green-800 ">
        {year}
      </h1>
      <p className=" text-2xl text-center uppercase font-bold ">
        Computer base test
      </p>
      <h4 className=" uppercase font-bold text-center text-green-800 ">
        report card
      </h4>

      <div className=" mt-8 border-t border-b  py-3">
        <div className=" flex items-center justify-between mb-1">
          <p className=" text-xl font-medium uppercase">Courses</p>
          <p className=" text-xl  font-medium uppercase">scores</p>
        </div>
        {results.map((result) => {
          return (
            <div>
              <div className=" flex items-center justify-between mb-1">
                <p className=" text-lg font-medium uppercase">{result.name}</p>
                <p className=" text-xl ">{result.score}</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className=" my-3 text-gray-800">
        Get a copy of CBT certifaction deliverd
        <br /> to your mail
      </p>

      <form className=" ">
        <div className="flex items-center flex-wrap gap-3 ">
          <input
            className=" p-3 w-[45%] "
            type="text"
            placeholder="Enter your name"
          />
          <input className=" p-3 w-[45%] " type="email" placeholder="Email" />
        </div>
        <div>
          <button className=" bg-black text-white font-medium uppercase rounded px-8 py-3 mt-3">
            send
          </button>
        </div>
      </form>
    </article>
  );
};

export default SubmitModal;
