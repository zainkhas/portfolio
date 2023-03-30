import { useEffect } from "react";
import { initGA, logPageView } from "../utils/analytics";

function GoogleAnalyticsWrapper({ children }) {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return <>{children}</>;
}

export default GoogleAnalyticsWrapper;
