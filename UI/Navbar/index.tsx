import React from "react";
import Logo from "../Logo";
import Hyperlink from "../Hyperlink";
import MenuItem from "../../components/Menu/MenuItem";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  const handleClick = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="fixed h-screen z-10 flex flex-col w-24 justify-between items-center py-6">
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

      <div>
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
    </div>
  );
};

export default index;
