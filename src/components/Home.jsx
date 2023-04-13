import React, { useState } from "react";
import { exam } from "../data";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleNext = () => {
    if (count === 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div className=" py-10 ">
      <div className=" w-[90%] h-full mx-auto flex flex-col lg:flex-row justify-between items-start">
        <div className=" bg-white p-6 w-[30%] rounded-md shadow-md h-fit">
          <h1 className=" text-2xl lg:4xl font-semibold">Subjects</h1>

          <div className=" mt-3">
            {exam.map((subject) => {
              return (
                <div className=" capitalize font-medium text-gray-800 mb-1 flex items-center justify-between">
                  <p
                    className={
                      subject.name === exam[count].name
                        ? "text-green-500 text-xl font-semibold italic"
                        : `lg:text-lg`
                    }
                  >
                    {subject.name}
                  </p>
                  <p className=" text-xl">40/100</p>
                </div>
              );
            })}
          </div>

          <button className=" bg-black text-white font-medium uppercase rounded px-8 py-3 mt-3">
            Submit
          </button>
        </div>
        <div className=" bg-white p-6 w-[65%] rounded-md shadow-md h-fit">
          <div className=" flex justify-between">
            <div>
              <h1 className=" text-2xl lg:4xl font-semibold capitalize">
                {exam[count].name}
              </h1>
              <p className=" text-gray-500 capitalize">
                {exam[count].instructions}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className=" font-semibold uppercase">score:</h1>
              <p className=" text-gray-500 capitalize">65</p>
            </div>
          </div>

          <div className=" mt-3">
            {exam[count].questions.map((item, index) => {
              return (
                <div key={index} className=" mb-3">
                  <p className=" capitalize font-medium lg:text-lg">
                    {index + 1}. {item.question}
                  </p>

                  {item.answers.map((ans, inx) => {
                    return (
                      <div key={inx} className=" flex items-center gap-3 mb-1">
                        <input type="checkbox" name="" id="" />
                        <p className="capitalize">{ans}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className=" float-right bg-black text-white font-medium uppercase rounded px-8 py-3 mt-3"
          >
            Next paper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
