import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { Menus } from "../utils/ProfileNavigationData";
import { Link } from "react-router-dom";
import { signOutAction } from "../utils/firebase/SignOutAction";
import { slidpUpOut } from "../animation/animate";
const UserProfileDetails = () => {
  const user = useSelector((state) => state.user?.user);
  const [isMenu, setIsMenu] = useState(false);
  console.log(user);
  return (
    <div className="flex items-center justify-center gap-4 relative">
      <div className="w-14 h-14 flex items-center justify-center overflow-hidden  rounded-xl cursor-pointer bg-emerald-500">
        {user?.photoURL ? (
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={user?.photoURL}
            alt={user?.displayName}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-xl text-white font-semibold capitalize">
            {user?.email[0]}
          </p>
        )}
      </div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenu(!isMenu)}
        className="p-4 rounded-md flex items-center bg-secondary cursor-pointer"
      >
        <IoIosArrowDown className="text-primaryText" />
      </motion.div>
      <AnimatePresence>
        {isMenu && (
          <motion.div
            {...slidpUpOut}
            className="bg-secondary absolute top-16 right-0 px-4 py-3 rounded-xl shadow-md z-10 flex-col items-start justify-start gap-4 min-w-[225px]"
          >
            {Menus &&
              Menus.map((menu) => (
                <Link
                  id={menu.id}
                  to={menu.uri}
                  className="text-primaryText text-lg hover:bg-white/5 px-2 py-1 w-full rounded-md block"
                >
                  {menu.name}
                </Link>
              ))}
            <motion.p
              onClick={signOutAction}
              whileTap={{ scale: 0.9 }}
              className="text-primaryText text-lg hover:bg-white/5 px-2 py-1 w-full rounded-md cursor-pointer"
            >
              Sign Out
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfileDetails;
