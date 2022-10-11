import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState({
    screenWidth: 0,
    screenHeight: 0,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setWindowSize({
      screenWidth: width,
      screenHeight: height,
    });
  }

  return windowSize;
};

export default useScreenSize;
