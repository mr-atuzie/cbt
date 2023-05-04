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
  const [sending, setSending] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    setSubmit(!submit);
    navigate("/");
  };

  console.log(results.name);

  const message = `English: ${results[0].score}\nMathematics: ${results[1].score}\nHistory: ${results[2].score}\nSports: ${results[3].score} `;

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

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
          setSending(false);
        },
        (error) => {
          console.log(error.text);
          setSending(false);
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
                htmlFor="name"
              >
                Name
              </label>
              <input
                required
                className="border  w-full lg:w-[80%] px-4 py-3"
                type="text"
                placeholder="Enter your Fullname"
                id="name"
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
                required
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

            {sending ? (
              <div className=" my-6" role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <input
                className="bg-black text-white mt-4 font-medium uppercase rounded px-8 py-3 "
                type="submit"
                value="Send"
              />
            )}
          </form>
        </div>
      )}
    </article>
  );
};

export default SubmitModal;
