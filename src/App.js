import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { exam } from "./data";
import { useState } from "react";
import English from "./components/English";
import Maths from "./components/Maths";
import History from "./components/History";
import Sports from "./components/Sports";
import SubmitModal from "./components/SubmitModal";

function App() {
  const [count, setCount] = useState(0);
  const [submit, setSubmit] = useState(false);
  return (
    <BrowserRouter>
      <div className="  bg-green-800 min-h-screen">
        {submit && (
          <div className=" w-full z-40 bg-black/80 h-screen fixed top-0 bottom-0 flex justify-center items-center">
            <SubmitModal submit={submit} setSubmit={setSubmit} />
          </div>
        )}

        <div className=" w-[97%] lg:w-[90%] h-full mx-auto flex flex-col lg:flex-row justify-between items-start py-10">
          <Navbar
            exam={exam}
            count={count}
            setCount={setCount}
            setSubmit={setSubmit}
          />

          <div className=" w-full lg:w-[65%] bg-white  p-6  rounded-md shadow-md h-fit">
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route
                path="/english"
                element={
                  <English
                    exam={exam.find((e) => e.name === "english")}
                    count={count}
                    setCount={setCount}
                    submit={submit}
                    setSubmit={setSubmit}
                  />
                }
              />
              <Route
                path="/mathematics"
                element={
                  <Maths
                    exam={exam.find((e) => e.name === "mathematics")}
                    count={count}
                    setCount={setCount}
                    submit={submit}
                    setSubmit={setSubmit}
                  />
                }
              />
              <Route
                path="/history"
                element={
                  <History
                    exam={exam.find((e) => e.name === "history")}
                    count={count}
                    setCount={setCount}
                    submit={submit}
                    setSubmit={setSubmit}
                  />
                }
              />
              <Route
                path="/sports"
                element={
                  <Sports
                    exam={exam.find((e) => e.name === "sports")}
                    count={count}
                    setCount={setCount}
                    submit={submit}
                    setSubmit={setSubmit}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
// exam={exam.find((e) => e.name === exam[count].name)}

export default App;
