import React from "react";

const Home = () => {
  return (
    <div className=" py-10 ">
      <div className=" w-[90%] h-full mx-auto flex flex-col lg:flex-row justify-between items-start">
        <div className=" bg-white p-6 w-[30%] rounded-md shadow-md h-fit">
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
        <div className=" bg-white p-6 w-[65%] rounded-md shadow-md h-fit">
          <h1 className=" text-2xl lg:4xl font-semibold">Questions</h1>
          <p className=" text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
            itaque!
          </p>

          <div className=" mt-3">
            <div className=" mb-3">
              <p className=" font-medium lg:text-lg">
                1. Who is the first black president of the united states ?
              </p>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Joe Biden</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Ronald Regan</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Hilary clinton</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Barcak Obama</p>
              </div>
            </div>
            <div className=" mb-3">
              <p className=" font-medium lg:text-lg">
                2. Who is the first black president of the united states ?
              </p>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Joe Biden</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Ronald Regan</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Hilary clinton</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Barcak Obama</p>
              </div>
            </div>
            <div className=" mb-3">
              <p className=" font-medium lg:text-lg">
                3. Who is the first black president of the united states ?
              </p>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Joe Biden</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Ronald Regan</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Hilary clinton</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Barcak Obama</p>
              </div>
            </div>
            <div className=" mb-3">
              <p className=" font-medium lg:text-lg">
                4. Who is the first black president of the united states ?
              </p>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Joe Biden</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Ronald Regan</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Hilary clinton</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Barcak Obama</p>
              </div>
            </div>
            <div className=" mb-3">
              <p className=" font-medium lg:text-lg">
                5. Who is the first black president of the united states ?
              </p>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Joe Biden</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Ronald Regan</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Hilary clinton</p>
              </div>
              <div className=" flex items-center gap-3 mb-1">
                <input type="checkbox" name="" id="" />
                <p className="capitalize">Barcak Obama</p>
              </div>
            </div>
          </div>

          <button className=" float-right bg-black text-white font-medium uppercase rounded px-8 py-3 mt-3">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
