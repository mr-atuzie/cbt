import React, { useState } from "react";
import { exam } from "../data";
import { useDispatch } from "react-redux";
import { correctAnswer } from "../redux/resultSlice";
import SubmitModal from "./SubmitModal";

const Home = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);

  const handleNext = () => {
    if (count === 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const handleAnswer = (index, answer, subject, question) => {
    dispatch(correctAnswer({ subject, index, answer, question }));
  };

  const handleList = (index) => {
    if (index === 0) {
      return "A";
    } else if (index === 1) {
      return "B";
    } else if (index === 2) {
      return "C";
    } else if (index === 3) {
      return "D";
    }
  };

  return (
    <div className=" py-10 ">
      {submit && (
        <div className=" w-full z-40 bg-black/80 h-screen fixed top-0 bottom-0 flex justify-center items-center">
          <SubmitModal />
        </div>
      )}
      <div className="w-[95%] lg:w-[90%] h-full mx-auto flex flex-col lg:flex-row justify-between items-start">
        <div className=" w-full bg-white p-6 lg:w-[30%] rounded shadow-md h-fit mb-6">
          <h1 className=" text-2xl lg:4xl font-semibold">Subjects</h1>

          <div className=" mt-3 flex gap-4 lg:gap-2 lg:flex-col">
            {exam.map((subject, index) => {
              return (
                <div
                  onClick={() => setCount(index)}
                  key={subject.name}
                  className=" capitalize font-medium text-gray-800 mb-1 flex items-center justify-between"
                >
                  <p
                    className={
                      subject.name === exam[count].name
                        ? "text-green-500 font-semibold "
                        : `lg:text-lg`
                    }
                  >
                    {subject.name}
                  </p>
                  {/* <p className=" text-xl">40/100</p> */}
                </div>
              );
            })}
          </div>

          <button
            onClick={() => setSubmit(true)}
            className=" bg-black text-white font-medium uppercase rounded px-8 py-3 mt-3"
          >
            Submit
          </button>
        </div>
        <div className=" w-full bg-white p-6 lg:w-[65%] rounded-md shadow-md h-fit">
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
                    let answer = item.answeer;
                    let subject = exam[count].name;
                    let question = index;
                    return (
                      <div
                        onClick={() =>
                          handleAnswer(inx, answer, subject, question)
                        }
                        key={inx}
                        className=" focus:bg-red-500 cursor-pointer flex items-center gap-2 mb-1"
                      >
                        <div>{handleList(inx)}</div>
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
