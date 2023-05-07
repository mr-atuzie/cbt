import React from "react";
import { useDispatch } from "react-redux";
import { correctAnswer } from "../redux/resultSlice";
import { useNavigate } from "react-router-dom";
// import SubmitModal from "./SubmitModal";

const Maths = ({ count, setCount, exam, submit }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/history");
  };

  const handleAnswer = (index, answer, subject, question) => {
    dispatch(correctAnswer({ subject, index, answer, question }));
  };

  return (
    <div>
      <div className=" w-full ">
        <div className=" flex justify-between">
          <div>
            <h1 className=" text-2xl lg:4xl font-semibold capitalize">
              {exam?.name}
            </h1>
            <p className=" text-sm text-gray-500 capitalize">
              {exam?.instructions}
            </p>
          </div>
          {/* <div className="flex items-center gap-3">
            <h1 className=" font-semibold uppercase">score:</h1>
            <p className=" text-gray-500 capitalize">65</p>
          </div> */}
        </div>

        <div className=" mt-3">
          {exam?.questions?.map((item, index) => {
            return (
              <div key={index} className=" mb-3">
                <p className=" capitalize font-medium lg:text-lg">
                  {index + 1}. {item.question}
                </p>

                {item.answers.map((ans, inx) => {
                  let answer = item.answeer;
                  let subject = exam.name;
                  let question = index;
                  return (
                    <div
                      onClick={() =>
                        handleAnswer(inx, answer, subject, question)
                      }
                      key={inx}
                      className=" focus:bg-red-500 cursor-pointer flex items-center gap-2 mb-1"
                    >
                      {/* <div>{handleList(inx)}</div> */}
                      <input
                        type="radio"
                        name={exam.questions[index].question}
                        id={inx}
                      />
                      <label htmlFor={inx} className="capitalize">
                        {ans}
                      </label>
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
  );
};

export default Maths;
