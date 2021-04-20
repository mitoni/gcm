import React, { useState } from "react";
import Logo from "../Logo";
import Hyperlink from "../Hyperlink";
import MenuItem from "../../components/Menu/MenuItem";
import { useRouter } from "next/router";
import MenuIcon from "../Icons/MenuIcon";

const index = () => {
  const router = useRouter();

  const [isMobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleClick = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="fixed sm:h-screen w-screen z-50 flex sm:flex-col flex-row sm:w-24 h-24 justify-between items-center sm:py-6 px-6">
      <Hyperlink href="/" className="z-50">
        <Logo />
      </Hyperlink>

      <Hyperlink href="/who-I-am" className="hidden sm:block">
        <MenuItem path="who-I-am">Who&nbsp;I&nbsp;am</MenuItem>
      </Hyperlink>

      <Hyperlink href="/what-I-write" className="hidden sm:block">
        <MenuItem path="what-I-write">What&nbsp;I&nbsp;write</MenuItem>
      </Hyperlink>

      <Hyperlink href="/what-I-do" className="hidden sm:block">
        <MenuItem path="what-I-do">What&nbsp;I&nbsp;do</MenuItem>
      </Hyperlink>

      <Hyperlink href="/contact-me" className="hidden sm:block">
        <MenuItem path="contact-me">Contact&nbsp;me</MenuItem>
      </Hyperlink>

      <div className="z-50">
        {router.locales.map((l, i) => (
          <React.Fragment key={i}>
            <Hyperlink
              onClick={() => handleClick(l)}
              className={`text-sm transition duration-500 ${
                router.locale === l ? "opacity-100" : "opacity-50"
              }`}
            >
              {l}
            </Hyperlink>
            {i !== router.locales.length - 1 && " | "}
          </React.Fragment>
        ))}
      </div>

      <Hyperlink
        className="sm:hidden block z-50"
        onClick={() => {
          setMobileOpen(!isMobileOpen);
        }}
      >
        <MenuIcon
          className={`text-xl transform origin-center transition-transform duration-200 ${
            isMobileOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </Hyperlink>

      <div
        className={`absolute top-0 left-0 w-screen h-screen z-0 pt-24 ${
          isMobileOpen ? "flex flex-col" : "hidden"
        } items-center justify-around`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.66)",
          backdropFilter: "blur(20px)",
        }}
      >
        <Hyperlink
          href="/who-I-am"
          onClick={() => {
            setMobileOpen(false);
          }}
        >
          <MenuItem path="who-I-am">Who&nbsp;I&nbsp;am</MenuItem>
        </Hyperlink>

        <Hyperlink
          href="/what-I-write"
          onClick={() => {
            setMobileOpen(false);
          }}
        >
          <MenuItem path="what-I-write">What&nbsp;I&nbsp;write</MenuItem>
        </Hyperlink>

        <Hyperlink
          href="/what-I-do"
          onClick={() => {
            setMobileOpen(false);
          }}
        >
          <MenuItem path="what-I-do">What&nbsp;I&nbsp;do</MenuItem>
        </Hyperlink>

        <Hyperlink
          href="/contact-me"
          onClick={() => {
            setMobileOpen(false);
          }}
        >
          <MenuItem path="contact-me">Contact&nbsp;me</MenuItem>
        </Hyperlink>
      </div>
    </div>
  );
};

export default index;
