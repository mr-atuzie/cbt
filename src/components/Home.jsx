import React from "react";
import { useNavigate } from "react-router-dom";
// import { exam } from "../data";
// import { useDispatch } from "react-redux";
// import { correctAnswer } from "../redux/resultSlice";
// import SubmitModal from "./SubmitModal";
// import Navbar from "./Navbar";

const Home = () => {
  // const [count, setCount] = useState(0);
  // const dispatch = useDispatch();
  // const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/english");
  };

  // const handleNext = () => {
  //   if (count === 3) {
  //     setCount(0);
  //   } else {
  //     setCount(count + 1);
  //   }
  // };

  // const handleAnswer = (index, answer, subject, question) => {
  //   dispatch(correctAnswer({ subject, index, answer, question }));
  // };

  // const handleList = (index) => {
  //   if (index === 0) {
  //     return "A";
  //   } else if (index === 1) {
  //     return "B";
  //   } else if (index === 2) {
  //     return "C";
  //   } else if (index === 3) {
  //     return "D";
  //   }
  // };

  // const [isChecked, setIsChecked] = useState(false);

  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <div>
      <div className=" w-full  h-fit">
        <div className=" flex justify-between">
          <div>
            <h1 className=" text-2xl lg:4xl font-semibold capitalize">RULES</h1>
            <p className=" text-gray-500 capitalize">
              Please read the following instruction carefully
            </p>
          </div>
          {/* <div className="flex items-center gap-3">
            <h1 className=" font-semibold uppercase">score:</h1>
            <p className=" text-gray-500 capitalize">65</p>
          </div> */}
        </div>

        <div className=" mt-3">
          <ol className=" font-medium lg:text-lg">
            <li className=" mb-2">
              1. This Exam contains 4 course which includes
              English,Mathematics,History and Sports
            </li>
            <li className=" mb-2">
              2. Only click next paper when you are done writing the current
              course
            </li>
            <li className=" mb-2">
              3. Only click submit button when you are done writing all 4 course
              course
            </li>
            <li className=" mb-2">
              4. After yoy click the submit button , Enter the Name you want to
              appear on your certificate.
            </li>
            <li className=" mb-2">
              5. After yoy click the submit button , Enter the Email you want to
              your certificate sent to.
            </li>
          </ol>
        </div>

        <button
          onClick={handleNext}
          className=" float-right bg-black text-white font-medium uppercase rounded px-8 py-3 mt-6"
        >
          start
        </button>
      </div>
    </div>
  );
};

export default Home;
