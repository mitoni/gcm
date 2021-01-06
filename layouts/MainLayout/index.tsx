import React, { useEffect, useRef } from "react";
import Navbar from "../../UI/Navbar";
import Cursor from "../../UI/Cursor";

const index = ({ children }: IProps) => {
  return (
    <div className="flex flex-row justify-start w-full h-full max-w-screen">
      <Cursor />
      <div className="w-24">
        <Navbar />
      </div>
      <div className="flex-1 min-h-screen">{children}</div>
    </div>
  );
};

export default index;

interface IProps {
  children: any;
}
