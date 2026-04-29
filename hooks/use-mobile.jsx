"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 1025;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false); // default false (important)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial value
    setIsMobile(mql.matches);

    // Listen for changes
    mql.addEventListener("change", handleChange);

    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
}