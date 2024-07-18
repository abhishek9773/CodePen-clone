import React, { useEffect, useState } from "react";
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import SplitPane from "react-split-pane";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import "./styles.css"; // Import the custom scrollbar styles

const NewProject = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setjs] = useState("");
  const [output, setOutput] = useState("");

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
  return (
    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">
      {/* alert area       */}

      {/* header area */}
      <header className="w-full flex items-center"></header>
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

                  <p className="text-primaryText font-semibold ">HMTL</p>
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
