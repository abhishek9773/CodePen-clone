import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

const UserAuthInput = (props) => {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);

  const handleTextChange = (e) => {
    setValue(e.target.value);
    props.setStateFunction(e.target.value);
    if (props.placeHolder === "Email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const status = emailRegex.test(value);
      setEmailValid(status);

      props.setGetEmailValidationStatus(status);
    } else if (props.placeholder === "Password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const status = passwordRegex.test(value);
    }
  };
  return (
    <div className=" flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300">{props.label}</label>
      <div
        className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200 ${
          !isEmailValid &&
          props.placeHolder === "Email" &&
          value.length > 0 &&
          "border-2 border-red-500"
        }`}
      >
        <props.Icon className="text-text555 text-2xl" />
        <input
          type={props.isPass ? "password" : "text"}
          placeholder={props.placeHolder}
          className="flex-1 w-full py-2 outline-none border-none bg-transparent text-text555 text-lg"
          value={value}
          onChange={handleTextChange}
        />
        {props.isPass && (
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowPass(!showPass)}
            className="cursor-pointer "
          >
            {showPass ? (
              <FaEyeSlash className="text-text555 text-2xl" />
            ) : (
              <FaEye className="text-text555 text-2xl " />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UserAuthInput;
