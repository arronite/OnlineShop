import React from "react";
import Loadingstyle from "./Loadingstyle.css";

const LoadingModal = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-100  dark:bg-slate-800">
      <div className="circle1 w-40 h-40  rounded-full bg-slate-400  dark:bg-slate-50 absolute"></div>
      <div className="circle2 w-32 h-32  rounded-full bg-slate-400 dark:bg-slate-50 absolute"></div>
      <div className="circle3 w-20 h-20  rounded-full bg-slate-400 dark:bg-slate-50 absolute"></div>
    </div>
  );
};

export default LoadingModal;
