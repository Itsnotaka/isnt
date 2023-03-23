import "../styles/global.css";
import type { AppProps } from "next/app";

import Providers from "../components/Providers";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default MyApp;
