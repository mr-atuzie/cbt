import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ exam, count, setCount, setSubmit }) => {
  const path = useLocation().pathname.slice(1);

  console.log(path);

  return (
    <div className=" w-full bg-white p-6 lg:w-[25%] rounded shadow-md  mb-6">
      <h1 className=" text-2xl lg:4xl font-semibold">Subjects</h1>

      <div className=" mt-6 flex gap-4 lg:gap-2 lg:flex-col">
        {exam.map((subject, index) => {
          return (
            <Link key={subject.name} to={`/${subject.name}`}>
              <div
                onClick={() => setCount(index)}
                className=" text-lg   capitalize font-medium text-gray-800 mb-1 flex items-center justify-between"
              >
                <p
                  className={
                    subject.name === path ? "text-green-500  underline" : ""
                  }
                >
                  {subject.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <button
        onClick={() => setSubmit(true)}
        className=" bg-black text-white font-medium uppercase rounded px-8 py-3 mt-6"
      >
        Submit
      </button>
    </div>
  );
};

export default Navbar;
