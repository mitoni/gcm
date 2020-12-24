import React from "react";
import Navbar from "../../UI/Navbar";
import Cursor from "../../UI/Cursor";

const index = ({ children }: IProps) => {
  return (
    <div className="flex flex-row justify-start h-full w-screen">
      <Cursor />
      <Navbar />
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
};

export default index;

interface IProps {
  children: any;
}
