import "tailwindcss/tailwind.css";
import "../styles/fonts/stylesheet.css";
import "../styles/global.css";

import MainLayout from "../layouts/MainLayout";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </RecoilRoot>
  );
}

export default MyApp;
