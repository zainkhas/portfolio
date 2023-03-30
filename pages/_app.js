import GoogleAnalyticsWrapper from "../components/GoogleAnalyticsWrapper";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleAnalyticsWrapper>
      <Component {...pageProps} />
      <Analytics />
    </GoogleAnalyticsWrapper>
  );
}

export default MyApp;
