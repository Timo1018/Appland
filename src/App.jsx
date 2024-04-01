import { AiOutlineUp } from "react-icons/ai";
import React from "react";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
      <div>
        <Layout />
      </div>
      <div className="fixed bottom-3.5 right-5 flex items-center justify-center bg-[#0898E7] text-white w-10 h-10 rounded-md">
        <a href="#">
          <AiOutlineUp size={24}/>
        </a>
      </div>
    </div>
  );
};

export default App;
