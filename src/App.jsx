import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
      <Routes>
        <Route path="/home/*" element={<Home />} />

        {/* default route */}

        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
};

export default App;
