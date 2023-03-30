import GoogleAnalyticsWrapper from "../components/GoogleAnalyticsWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleAnalyticsWrapper>
      <Component {...pageProps} />
    </GoogleAnalyticsWrapper>
  );
}

export default MyApp;
