import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Pages";
import { auth, db } from "./config/Firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { BallTriangle } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { SET_USER } from "./store/actions/UserAction";
import { NewProject } from "./containers";

const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        console.log(userCredential?.providerData[0].email);
        setDoc(
          doc(db, "users", userCredential?.uid),
          userCredential?.providerData[0]
        ).then(() => {
          dispatch(SET_USER(userCredential?.providerData[0]));
          navigate("/home/projects", { replace: true });
        });
      } else {
        navigate("/home/auth", { replace: true });
      }
      setInterval(() => {
        setIsLoading(false);
      }, 1000);
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
          <Routes>
            <Route path="/home/*" element={<Home />} />
            <Route path="/newProject" element={<NewProject />} />

            {/* default route */}

            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
