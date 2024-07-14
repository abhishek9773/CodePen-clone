import React, { useState } from "react";
import { UserAuthInput } from "../components";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import signinWithGoogle from "../utils/SigninWithGoogle";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [getEmailValidationStatus, setGetEmailValidationStatus] =
    useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="w-full py-6">
      <svg
        className="object-contain w-32 opacity-50 h-auto"
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

      <div className="w-full flex flex-col items-center justify-center py-8">
        <p className="py-12 text-2xl text-primaryText"> Join with Us!</p>
        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary  flex flex-col items-center justify-center gap-8">
          <UserAuthInput
            label="Email"
            placeHolder="Email"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope}
            setGetEmailValidationStatus={setGetEmailValidationStatus}
          />
          <UserAuthInput
            label="Password"
            placeHolder="Password"
            isPass={true}
            key="Password"
            setStateFunction={SetPassword}
            Icon={RiLockPasswordLine}
          />
          {!isLogin ? (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500"
            >
              <p className="text-xl text-white"> Sign Up</p>
            </motion.div>
          ) : (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500"
            >
              <p className="text-xl text-white"> Login</p>
            </motion.div>
          )}
          {!isLogin ? (
            <p className="dark:text-white text-black">
              Already have an account !{"  "}
              <spen
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-500 cursor-pointer underline"
              >
                Login Here
              </spen>
            </p>
          ) : (
            <p className="dark:text-white text-black">
              Doesn't Have an account{"  "}
              <spen
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-500 cursor-pointer underline"
              >
                Create Here
              </spen>
            </p>
          )}
          <div className=" flex gap-10 items-center justify-center">
            <motion.div
              onClick={signinWithGoogle}
              whileTap={{ scale: 0.9 }}
              className="rounded-full cursor-pointer "
            >
              <FcGoogle className="text-6xl " />
            </motion.div>
            <p className="dark:text-white text-md ">or</p>

            <motion.div
              whileTap={{ scale: 0.9 }}
              className="rounded-full cursor-pointer "
            >
              <FaGithub className="text-5xl text-gray-300  " />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
