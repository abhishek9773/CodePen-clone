import React, { useEffect, useState } from "react";
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import SplitPane from "react-split-pane";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import "./styles.css"; // Import the custom scrollbar styles
import { Link, useAsyncError } from "react-router-dom";
import logo from "../assets/logo_s.svg"; // Import the SVG file
import { AnimatePresence, motion } from "framer-motion";
import { MdCheck, MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { UserProfileDetails } from "../components";
import { doc, setDoc } from "firebase/firestore";
import Alert from "../components/Alert/Alert";
import { db } from "../config/Firebase.config";

const NewProject = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setjs] = useState("");
  const [output, setOutput] = useState("");
  const [title, setTitle] = useState("Untitled");
  const [isTitle, setIsTitle] = useState(false);
  const [alert, setAlert] = useState(false);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    updateOutput();
  }, [html, css, js]);
  const updateOutput = () => {
    const combinedOutput = `
    <html>
     <head>
        <style>${css}</style>
      </head>
     <body>
      ${html}
       <script>${js}</script>
     </body>

    </html>
    `;
    setOutput(combinedOutput);
  };

  const saveProgram = async () => {
    const id = `${Date.now()}`;
    const _doc = {
      id: id,
      user: user,
      title: title,
      html: html,
      css: css,
      js: js,
      output: output,
    };
    await setDoc(doc(db, "Projects", id), _doc)
      .then((res) => {
        setAlert(true);
      })
      .catch((error) => console.log(error));

    setInterval(() => {
      setAlert(false);
    }, 2000);
  };
  return (
    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">
      {/* alert area       */}
      {alert && <Alert status={"Success"} alertMsg={"Project Saved...."} />}

      {/* header area */}
      <header className="w-full flex items-center justify-between px-8 py-2">
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center justify-center gap-3 ">
            <Link to={"/home/projects"}>
              <img
                src="https://imgs.search.brave.com/3sbhxnL9e6esNB6Ey0nouI1TEcNIbqNl17v8b_GUDyw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZWJiMWNlZjEw/MTRjMGI1ZTQ4NTUu/cG5n"
                className="w-12 h-auto object-contain"
              />
            </Link>
            <div className="flex flex-col items-start justify-start">
              <div className="flex items-center justify-center gap-3">
                <AnimatePresence>
                  {isTitle ? (
                    <>
                      <motion.input
                        key={"TitleInput"}
                        type="text"
                        placeholder="Your Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="px-3 py-1 rounded-md text-primaryText text-base outline-none border-none bg-transparent"
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <motion.p
                        key={"titleLabel"}
                        className="px-3 py-2 text-white text-lg"
                      >
                        {title}
                      </motion.p>
                    </>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {isTitle ? (
                    <motion.div
                      key={"MdCheck"}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer"
                      onClick={() => setIsTitle(false)}
                    >
                      <MdCheck className="text-2xl text-emerald-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={"MdEdit"}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer"
                      onClick={() => setIsTitle(true)}
                    >
                      <MdEdit className="text-2xl text-primaryText" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* follow section */}
              <div className="flex items-center justify-center px-3 -mt-2 gap-2">
                <p className="text-primaryText text-sm">
                  {user?.displayName
                    ? user?.displayName
                    : `${user?.email.split("@")[0]}`}
                </p>
                <motion.p
                  whileTap={{ scale: 0.9 }}
                  className="text-[10px] font-semibold bg-emerald-500 rounded-sm px-2 py-[1px] text-primary  cursor-pointer outline-none"
                >
                  follow
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        {/* user section */}
        {user && (
          <div className="flex items-center justify-center gap-4">
            <motion.button
              onClick={saveProgram}
              className="px-6 py-4 bg-primaryText cursor-pointer text-base text-primary font-semibold  rounded-md"
            >
              Save
            </motion.button>
            <UserProfileDetails />
          </div>
        )}
      </header>
      {/* coding area */}
      <div>
        {/* horizontal */}
        <SplitPane
          split="horizontal"
          minSize={100}
          maxSize={-100}
          defaultSize={"50%"}
        >
          {/* top coding section */}
          <SplitPane split="vertical" minSize={500}>
            {/* html code  */}
            <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between">
                <div className="bg-secondary px-4 py-2 border-t-4 flex itmes-center justify-center gap-3 border-t-gray-500 ">
                  <FaHtml5 className="text-xl text-red-500" />

                  <p className="text-primaryText font-semibold ">HTML</p>
                </div>
                <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                  <FcSettings className="text-xl text-primaryText" />
                  <FaChevronDown className="text-xl text-primaryText" />
                </div>
              </div>
              <div className="w-full px-2 overflow-auto">
                <CodeMirror
                  value={html}
                  height="600px"
                  theme={"dark"}
                  extensions={[javascript({ jsx: true })]}
                  onChange={(value, viewUpdate) => {
                    setHtml(value);
                  }}
                />
              </div>
            </div>
            <SplitPane split="vertical" minSize={500}>
              {/* Css code */}
              <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between">
                  <div className="bg-secondary px-4 py-2 border-t-4 flex itmes-center justify-center gap-3 border-t-gray-500 ">
                    <FaCss3 className="text-lg text-sky-500" />

                    <p className="text-primaryText font-semibold ">CSS</p>
                  </div>
                  <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                    <FcSettings className="text-xl text-primaryText" />
                    <FaChevronDown className="text-xl text-primaryText" />
                  </div>
                </div>
                <div className="w-full px-2 overflow-auto">
                  <CodeMirror
                    value={css}
                    height="600px"
                    theme={"dark"}
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      setCss(value);
                    }}
                  />
                </div>
              </div>
              {/* js code */}
              <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between">
                  <div className="bg-secondary px-4 py-2 border-t-4 flex itmes-center justify-center gap-3 border-t-gray-500 ">
                    <FaJs className="text-xl text-yellow-500" />

                    <p className="text-primaryText font-semibold ">JS</p>
                  </div>
                  <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                    <FcSettings className="text-xl text-primaryText" />
                    <FaChevronDown className="text-xl text-primaryText" />
                  </div>
                </div>
                <div className="w-full px-2 overflow-auto">
                  <CodeMirror
                    value={js}
                    height="600px"
                    theme={"dark"}
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      setjs(value);
                    }}
                  />
                </div>
              </div>
            </SplitPane>
          </SplitPane>
          {/* bottom result session */}
          <div
            className="bg-white "
            style={{ overflow: "hidden", height: "100%" }}
          >
            <iframe
              title="Result"
              srcDoc={output}
              style={{ border: "none", width: "100%", height: "100%" }}
            />
          </div>
        </SplitPane>
      </div>
    </div>
  );
};

export default NewProject;
