import { useEffect } from "react";
import "../styles/globals.css";
import { initGA, logPageView } from "../utils/analytics";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
