import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
// import { SMTPClient } from "emailjs";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const SubmitModal = ({ submit, setSubmit }) => {
  const year = new Date().getFullYear();
  const results = useSelector((state) => state.results.scores);
  const form = useRef();
  const [sent, setSent] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    setSubmit(!submit);
    navigate("/");
  };

  console.log(results.name);

  const message = `English: ${results[0].score}\nMathematics: ${results[1].score}\nHistory: ${results[2].score}\nSports: ${results[3].score} `;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_keu82gf",
        "template_hslu977",
        form.current,
        "5bwkLkCC1c3TQELzA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <article className=" w-[90%] lg:w-[40%] p-6  bg-white">
      {/* 
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
          <button
            onClick={handleSend}
            className=" bg-black text-white font-medium uppercase rounded px-8 py-3 mt-3"
          >
            send
          </button>
        </div>
      </form> */}

      {sent ? (
        <div className="flex flex-col justify-center items-center ">
          <img
            width={150}
            src="https://img.freepik.com/free-icon/email_318-715784.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=robertav1_2_sidr"
            alt=""
          />
          <h1 className=" text-green-500 mt-3">
            Email has been sent successfully
          </h1>

          <button
            onClick={handleBack}
            className=" bg-black text-white font-medium uppercase rounded px-8 py-3 mt-6"
          >
            back
          </button>
        </div>
      ) : (
        <div>
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
                    <p className=" text-lg font-medium uppercase">
                      {result.name}
                    </p>
                    <p className=" text-xl ">{result.score}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className=" my-3 text-gray-800">
            Get a copy of CBT certifaction sent to your mail
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className=" mb-4">
              <label
                className=" mb-1 text-gray-700 block font-medium "
                htmlFor="email"
              >
                Name
              </label>
              <input
                className="border  w-full lg:w-[80%] px-4 py-3"
                type="email"
                placeholder="Enter your Fullname"
                id="email"
                name="to_name"
              />
            </div>
            {/* <input
          className="py-3"
          type="text"
          name="to_name"
          placeholder="Enter your full Name"
        /> */}
            <div className=" mb-4">
              <label
                className=" mb-1 text-gray-700 block font-medium "
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border  w-full lg:w-[80%] px-4 py-3"
                type="email"
                placeholder="Enter email"
                id="email"
                name="user_email"
              />
            </div>

            {/* <input
          placeholder="Enter your email"
          className="py-3"
          type="email"
          name="user_email"
        /> */}

            <div className="hidden">
              <label>Message</label>
              <textarea value={message} name="message" />
            </div>

            <input
              className="bg-black text-white mt-4 font-medium uppercase rounded px-8 py-3 "
              type="submit"
              value="Send"
            />
          </form>
        </div>
      )}
    </article>
  );
};

export default SubmitModal;
