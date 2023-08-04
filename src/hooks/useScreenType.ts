import { breakpoints } from "@/theme/breakpoints";
import { useState, useEffect } from "react";

const useScreenType = (): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} => {
  const isClient = typeof window !== "undefined";
  const screenWidth = isClient ? window.innerWidth : 0;

  const [isMobile, setIsMobile] = useState(screenWidth < breakpoints.values.sm);
  const [isTablet, setIsTablet] = useState(
    screenWidth >= breakpoints.values.sm && screenWidth < breakpoints.values.lg
  );
  const [isDesktop, setIsDesktop] = useState(
    screenWidth >= breakpoints.values.lg
  );

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      const newScreenWidth = window.innerWidth;

      setIsMobile(newScreenWidth < breakpoints.values.sm);
      setIsTablet(
        newScreenWidth >= breakpoints.values.sm &&
          newScreenWidth < breakpoints.values.lg
      );
      setIsDesktop(newScreenWidth >= breakpoints.values.lg);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return { isMobile, isTablet, isDesktop };
};

export default useScreenType;
