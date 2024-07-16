import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Pages";
import { auth } from "./config/Firebase.config";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((result) => {
      if (result) {
        console.log(userCred?.provierData[0].email);
      } else {
        navigate("/home/auth", { replace: true });
      }
    });
  });
  return (
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
      <Routes>
        <Route path="/home/*" element={<Home />} />

        {/* default route */}

        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
      d
    </div>
  );
};

export default App;
