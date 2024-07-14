import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import { Projects, SignUp } from "../containers";

const Home = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const [user, setUser] = useState("");
  return (
    <>
      <div
        className={`w-2 ${
          isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"
        } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSideMenu(!isSideMenu)}
          className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 items-center justify-center px-2 py-1.5  cursor-pointer"
        >
          <HiChevronDoubleLeft className="text-white text-xl" />
        </motion.div>
        <div className="overflow-hidden w-full flex flex-col gap-4">
          <Link to="/home">
            <svg
              className="object-contain w-41 h-auto"
              viewBox="0 0 138 26"
              fill="none"
              stroke="#fff"
              stroke-width="2.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
            </svg>
          </Link>
          <Link to={"/newProject"}>
            <div className="px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200 ">
              <p className="text-gray-400 group-hover:text-gray-200 capitalize ">
                Start Coding
              </p>
            </div>
          </Link>

          {user && (
            <Link
              to={"/home/projects"}
              className="flex items-center justify-center gap-6"
            >
              <MdHome className="text-primaryText text-xl " />
              <p className="text-lg text-primaryText ">Home</p>
            </Link>
          )}
        </div>
      </div>
      <div className="flex-1 min-h-screen max-h-screen overflow-scroll h-full flex flex-col items-center justify-start px-4 md:px-12 py-4 md:py-12">
        <div className=" w-full  flex items-center justify-between  gap-3">
          <div className=" bg-secondary w-full flex items-center rounded-md justify-between gap-3 px-4 py-3">
            <IoSearch className="text-2xl text-primaryText" />
            <input
              type="text"
              className="flex-1  px-4 py text-xl bg-transparent outline-none border-none text-primaryText placeholder:text-gray-600"
              placeholder="Search here..."
            />
          </div>
          {!user && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center gap-3"
            >
              <Link
                to={"/home/auth"}
                className="bg-emerald-500 px-6 py-2 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700"
              >
                SignUp
              </Link>
            </motion.div>
          )}
          {user && <div></div>}
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/*" element={<Projects />} />
            <Route path="/auth" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
