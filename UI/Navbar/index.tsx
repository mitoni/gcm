import React from "react";
import Logo from "../Logo";
import Hyperlink from "../Hyperlink";
import MenuItem from "../../components/Menu/MenuItem";

const index = () => {
  return (
    <div className="h-screen z-10 flex flex-col w-24 justify-between items-center py-6">
      <Hyperlink href="/">
        <Logo />
      </Hyperlink>

      <Hyperlink href="/who-I-am">
        <MenuItem path="who-I-am">Who&nbsp;I&nbsp;am</MenuItem>
      </Hyperlink>

      <Hyperlink href="/what-I-do">
        <MenuItem path="what-I-do">What&nbsp;I&nbsp;do</MenuItem>
      </Hyperlink>

      <Hyperlink href="/contact-me">
        <MenuItem path="contact-me">Contact&nbsp;me</MenuItem>
      </Hyperlink>
    </div>
  );
};

export default index;
